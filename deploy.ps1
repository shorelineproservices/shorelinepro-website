# Deployment automation script for GitHub + Netlify

Write-Host "Shoreline Pro Website - GitHub + Netlify Deployment" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan

$GitHubUsername = Read-Host "Enter your GitHub username"
$RepoName = "shorelinepro-website"

# Navigate to project directory
Set-Location "C:\Users\EliteBook\Documents\shorelinepro"

# Check git status
Write-Host "`nGit Status:" -ForegroundColor Yellow
git status

Write-Host "`n" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host "READY FOR GITHUB DEPLOYMENT" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan

Write-Host "`n1. CREATE GITHUB REPO:" -ForegroundColor Yellow
Write-Host "   Visit: https://github.com/new" -ForegroundColor Cyan
Write-Host "   Name: $RepoName" -ForegroundColor Cyan
Write-Host "   Click: Create repository" -ForegroundColor Cyan

Write-Host "`n2. PUSH CODE TO GITHUB:" -ForegroundColor Yellow
Write-Host "   Run this command:" -ForegroundColor Cyan
Write-Host "   git remote add origin https://github.com/$GitHubUsername/$RepoName.git" -ForegroundColor Cyan
Write-Host "   git branch -M main" -ForegroundColor Cyan
Write-Host "   git push -u origin main" -ForegroundColor Cyan

Write-Host "`n3. DEPLOY ON NETLIFY:" -ForegroundColor Yellow
Write-Host "   Visit: https://netlify.com/signup" -ForegroundColor Cyan
Write-Host "   Connect your GitHub account" -ForegroundColor Cyan
Write-Host "   Select repository: $RepoName" -ForegroundColor Cyan
Write-Host "   Publish dir: public" -ForegroundColor Cyan
Write-Host "   Copy Netlify URL when deployed" -ForegroundColor Cyan

Write-Host "`n4. UPDATE CLOUDFLARE DNS:" -ForegroundColor Yellow
Write-Host "   Visit: https://dash.cloudflare.com" -ForegroundColor Cyan
Write-Host "   Select: shorelineproservices.com" -ForegroundColor Cyan
Write-Host "   DNS > Change A record to CNAME" -ForegroundColor Cyan
Write-Host "   Paste Netlify URL" -ForegroundColor Cyan

Write-Host "`n5. WAIT 5-10 minutes for DNS propagation" -ForegroundColor Yellow

Write-Host "`nSite goes live at: https://shorelineproservices.com" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Cyan
