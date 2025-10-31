# GlowFM VPS Deployment Script (PowerShell)
# Deploy to glowfmradio.com

$VPS_HOST = "185.113.249.58"
$VPS_USER = "root"
$APP_DIR = "/var/www/glowfmsocialhubdemo"

Write-Host "🚀 Starting deployment to glowfmradio.com..." -ForegroundColor Green
Write-Host ""

# SSH command to pull and deploy
$deployCommands = @"
cd $APP_DIR && \
echo '📥 Pulling latest changes from GitHub...' && \
git pull origin main && \
echo '📦 Installing dependencies...' && \
pnpm install --frozen-lockfile && \
echo '🏗️ Building application...' && \
pnpm run build && \
echo '🔄 Restarting PM2 process...' && \
pm2 restart glowfm-web || pm2 start pnpm --name glowfm-web -- run start && \
pm2 save && \
echo '✅ Deployment completed successfully!' && \
pm2 status
"@

Write-Host "Connecting to VPS at $VPS_HOST..." -ForegroundColor Yellow
Write-Host ""

# Execute deployment
ssh ${VPS_USER}@${VPS_HOST} $deployCommands

Write-Host ""
Write-Host "✅ Deployment completed!" -ForegroundColor Green
Write-Host "🌐 Visit: https://glowfmradio.com" -ForegroundColor Cyan
