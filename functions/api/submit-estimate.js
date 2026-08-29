// Cloudflare Pages Function — handles the estimate form POST directly
// (replaces the old Netlify Forms integration, which stopped working
// once the site moved off Netlify hosting). Sends the submission as
// an email via Resend, then redirects to /thank-you.html.
//
// Route: POST /api/submit-estimate
// Required Pages secret: RESEND_API_KEY (wrangler pages secret put)
// Optional Pages variables: FROM_EMAIL, TO_EMAIL (sensible defaults below)

const MAX_ATTACHMENT_BYTES = 8 * 1024 * 1024; // per-file cap so a big video doesn't blow the email size limit
const MAX_TOTAL_ATTACHMENT_BYTES = 30 * 1024 * 1024; // Resend's practical email size ceiling

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function onRequestPost({ request, env }) {
  const redirectTo = new URL("/thank-you.html", request.url);

  let form;
  try {
    form = await request.formData();
  } catch {
    return new Response("Bad form submission", { status: 400 });
  }

  // Honeypot: bots fill every field. If this is set, pretend success and
  // silently drop the submission so the bot doesn't learn it was caught.
  if (form.get("bot-field")) {
    return Response.redirect(redirectTo.toString(), 303);
  }

  const name = (form.get("name") || "").toString().trim();
  const phone = (form.get("phone") || "").toString().trim();
  const service = (form.get("service") || "").toString().trim();
  const message = (form.get("message") || "").toString().trim();

  if (!name || !phone) {
    return new Response("Missing required fields", { status: 400 });
  }

  const files = form.getAll("photos").filter((f) => f instanceof File && f.size > 0);

  const attachments = [];
  let totalBytes = 0;
  const skipped = [];
  for (const file of files) {
    if (file.size > MAX_ATTACHMENT_BYTES) {
      skipped.push(`${file.name} (${Math.round(file.size / 1024 / 1024)}MB — too large)`);
      continue;
    }
    if (totalBytes + file.size > MAX_TOTAL_ATTACHMENT_BYTES) {
      skipped.push(`${file.name} (skipped — total attachment size limit reached)`);
      continue;
    }
    const buf = await file.arrayBuffer();
    const base64 = btoa(String.fromCharCode(...new Uint8Array(buf)));
    attachments.push({ filename: file.name, content: base64 });
    totalBytes += file.size;
  }

  const fromEmail = env.FROM_EMAIL || "estimates@shorelineproservices.com";
  const toEmail = env.TO_EMAIL || "shorelineproservices@gmail.com";

  const htmlBody = `
    <h2>New estimate request</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Project type:</strong> ${escapeHtml(service || "Not specified")}</p>
    <p><strong>Details:</strong><br>${escapeHtml(message || "—").replace(/\n/g, "<br>")}</p>
    ${attachments.length ? `<p><strong>Attached:</strong> ${attachments.length} file(s)</p>` : ""}
    ${skipped.length ? `<p><strong>Not attached (too large):</strong><br>${skipped.map(escapeHtml).join("<br>")}</p>` : ""}
  `;

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Shoreline Pro Services Website <${fromEmail}>`,
      to: [toEmail],
      subject: `New estimate request from ${name}`,
      html: htmlBody,
      attachments: attachments.length ? attachments : undefined,
    }),
  });

  if (!resendRes.ok) {
    const errText = await resendRes.text();
    console.error("Resend API error:", resendRes.status, errText);
    return new Response("Failed to send — please call us instead.", { status: 502 });
  }

  return Response.redirect(redirectTo.toString(), 303);
}
