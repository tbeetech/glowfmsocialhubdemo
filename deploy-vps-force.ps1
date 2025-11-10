# Enhanced GlowFM VPS Deployment Script with Cache Busting
# Deploy to glowfmradio.com with force refresh

$VPS_HOST = "185.113.249.58"
$VPS_USER = "root"
$APP_DIR = "/var/www/glowfmsocialhubdemo"

Write-Host "🚀 Starting FORCE deployment to glowfmradio.com..." -ForegroundColor Green
Write-Host ""

# Enhanced SSH command to pull and deploy with cache clearing
$deployCommands = @"
cd $APP_DIR; \
echo '📥 Pulling latest changes from GitHub...'; \
git fetch origin main; \
git reset --hard origin/main; \
echo '🧹 Clearing node_modules and build cache...'; \
rm -rf node_modules; \
rm -rf apps/web/.next; \
rm -rf apps/web/out; \
pnpm store prune; \
echo '📦 Installing fresh dependencies...'; \
pnpm install --no-frozen-lockfile; \
echo '🏗️ Building application with fresh cache...'; \
cd apps/web; \
rm -rf .next; \
pnpm run build; \
cd ../..; \
echo '🛑 Stopping all PM2 processes...'; \
pm2 stop all; \
pm2 delete glowfm-web || true; \
echo '🔄 Starting fresh PM2 process...'; \
pm2 start apps/web/package.json --name glowfm-web; \
pm2 save; \
echo '✅ Deployment completed with cache clear!'; \
pm2 status; \
echo '📊 Memory usage:'; \
free -h; \
echo '💾 Disk usage:'; \
df -h /var/www
"@

Write-Host "Connecting to VPS at $VPS_HOST for FORCE deployment..." -ForegroundColor Yellow
Write-Host ""

# Execute enhanced deployment
ssh ${VPS_USER}@${VPS_HOST} $deployCommands

Write-Host ""
Write-Host "✅ FORCE Deployment completed!" -ForegroundColor Green
Write-Host "🌐 Visit: https://glowfmradio.com" -ForegroundColor Cyan
Write-Host "💡 Clear your browser cache (Ctrl+F5) to see changes" -ForegroundColor Yellow