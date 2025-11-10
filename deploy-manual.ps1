# Manual Deployment Script
# Run this when you want to deploy manually to your VPS

Write-Host "=== Manual VPS Deployment ===" -ForegroundColor Cyan
Write-Host ""

# Check if there are uncommitted changes
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "⚠️  You have uncommitted changes!" -ForegroundColor Yellow
    Write-Host ""
    git status --short
    Write-Host ""
    $commit = Read-Host "Do you want to commit them first? (y/n)"
    
    if ($commit -eq "y") {
        $message = Read-Host "Enter commit message"
        git add .
        git commit -m "$message"
        Write-Host "✓ Changes committed" -ForegroundColor Green
    }
}

# Check if we need to push
$unpushed = git log origin/main..HEAD --oneline
if ($unpushed) {
    Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
    git push origin main
    Write-Host "✓ Pushed to GitHub" -ForegroundColor Green
    Write-Host ""
}

Write-Host "🚀 Deploying to VPS..." -ForegroundColor Cyan
Write-Host ""

# Run deployment on VPS
ssh root@178.79.187.252 @"
cd /var/www/glowfmsocialhubdemo
echo '1. Pulling from GitHub...'
git fetch origin main
git reset --hard origin/main
git clean -fd
echo '✓ Code updated'
echo ''
echo '2. Installing dependencies...'
export PNPM_HOME=`$HOME/.local/share/pnpm
export PATH=`$PNPM_HOME:`$PATH
pnpm install --frozen-lockfile
echo '✓ Dependencies installed'
echo ''
echo '3. Building...'
pnpm run build
echo '✓ Build complete'
echo ''
echo '4. Restarting services...'
pm2 reload ecosystem.config.js || pm2 start ecosystem.config.js
pm2 save
echo '✓ Services restarted'
echo ''
echo '5. Status:'
pm2 status
echo ''
echo '=== Deployment Complete ==='
"@

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Deployment Successful!" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "❌ Deployment Failed!" -ForegroundColor Red
    Write-Host "Check the error messages above." -ForegroundColor Red
    Write-Host ""
}
