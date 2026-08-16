export default function Home() {
  return (
    <>
      <div className="ribbon">
        <div className="wrap">
          <span>
            <strong>Licensed</strong> WA #SHORES751PG
          </span>
          <span>
            <strong>Bonded &amp; Insured</strong>
          </span>
          <span>
            Serving <strong>Vancouver, WA &amp; Clark County</strong>
          </span>
        </div>
      </div>

      <header className="hero">
        <div className="wrap hero-inner">
          <div className="brandmark">
            <span className="dot" />
            <span>Shoreline Pro Services</span>
          </div>
          <div className="eyebrow">Free Estimate — No Obligation</div>
          <h1 className="headline">A painter you can actually get on the phone.</h1>
          <p className="sub">
            Licensed, bonded &amp; insured interior and exterior painting for
            Vancouver, WA and Clark County homes. Call now and talk to a real
            person about your project.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="tel:+13603382000" id="call-btn">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call (360) 338-2000
            </a>
            <a className="btn btn-secondary" href="#estimate">
              Get a Free Estimate ↓
            </a>
          </div>
          <p className="phone-note">
            Or scroll down — <a href="#estimate">tell us about your project</a>{" "}
            and we&apos;ll call you back same day.
          </p>
        </div>
      </header>

      <svg
        className="brushstroke"
        viewBox="0 0 1080 26"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0,14 C120,4 220,22 340,12 C460,2 560,20 680,10 C800,1 900,19 1080,8 L1080,26 L0,26 Z"
          fill="#C08A2E"
          opacity="0.9"
        />
        <path
          d="M0,18 C140,10 260,24 400,16 C540,8 660,22 800,14 C900,8 1000,20 1080,14 L1080,26 L0,26 Z"
          fill="#1B2A47"
          opacity="0.55"
        />
      </svg>

      <section className="pillars">
        <div className="wrap pillar-grid">
          <div className="pillar">
            <svg
              className="pillar-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="M12 2 3 6v6c0 5 4 9 9 10 5-1 9-5 9-10V6l-9-4Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <h3>Licensed &amp; Insured</h3>
            <p>
              WA contractor license SHORES751PG. Fully bonded and insured on
              every job.
            </p>
          </div>

          <div className="pillar">
            <svg
              className="pillar-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
            <h3>Premium Coatings</h3>
            <p>
              Sherwin-Williams Emerald Urethane Trim Enamel on trim and doors,
              Duration on walls and ceilings.
            </p>
          </div>

          <div className="pillar">
            <svg
              className="pillar-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <h3>Local &amp; Responsive</h3>
            <p>
              Based in Vancouver, WA. We answer, we show up, we quote fast.
            </p>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <h2>What we do</h2>
          <p className="sub" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Residential painting, done right the first time.
          </p>
          <div className="service-chips">
            <span className="chip">Exterior Painting</span>
            <span className="chip">Interior Painting</span>
            <span className="chip">Cabinet Refinishing</span>
            <span className="chip">Deck &amp; Fence Staining</span>
          </div>
        </div>
      </section>

      <svg
        className="brushstroke"
        viewBox="0 0 1080 26"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0,10 C130,20 240,4 360,14 C480,24 590,6 710,16 C830,24 930,6 1080,16 L1080,26 L0,26 Z"
          fill="#1B2A47"
          opacity="0.5"
        />
        <path
          d="M0,16 C150,6 270,22 410,12 C550,4 660,20 800,10 C910,4 1000,18 1080,12 L1080,26 L0,26 Z"
          fill="#C08A2E"
          opacity="0.9"
        />
      </svg>

      <section className="offer" id="estimate">
        <div className="wrap">
          <div className="offer-card">
            <div className="offer-copy">
              <div className="eyebrow">Your Free Estimate Includes</div>
              <h2>No pressure. No upsell script. Just a real quote.</h2>
              <p>
                Tell us a little about the project and we&apos;ll follow up same day
                — usually within the hour during business hours.
              </p>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  On-site or video walkthrough, your choice
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Written quote with material and labor broken out
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  No obligation to book
                </li>
              </ul>
            </div>

            <div className="offer-form">
              <h3>Request your estimate</h3>
              <p className="form-sub">
                Or just call — <a href="tel:+13603382000">(360) 338-2000</a>
              </p>
              <form id="estimate-form" action="https://formspree.io/f/xoeakala" method="POST">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="field">
                  <label htmlFor="service">Project type</label>
                  <select id="service" name="service">
                    <option>Exterior painting</option>
                    <option>Interior painting</option>
                    <option>Cabinet refinishing</option>
                    <option>Deck / fence staining</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">A few details (optional)</label>
                  <textarea id="message" name="message" rows={3} />
                </div>
                <input type="text" name="_gotcha" style={{ display: "none" }} />
                <button type="submit" className="btn btn-primary">
                  Request My Free Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div>
            <strong>Shoreline Pro Services LLC</strong> · WA License SHORES751PG
          </div>
          <div>
            <a href="tel:+13603382000">(360) 338-2000</a> · Vancouver, WA · Clark County
          </div>
        </div>
      </footer>
    </>
  );
}
