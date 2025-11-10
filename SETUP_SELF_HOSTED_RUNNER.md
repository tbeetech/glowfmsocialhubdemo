# Setup Self-Hosted GitHub Actions Runner on VPS

This guide will help you set up a GitHub Actions runner directly on your VPS, eliminating all SSH and firewall issues.

---

## Why Self-Hosted Runner?

✅ **No SSH/Firewall Issues** - Runner is already on the VPS
✅ **Faster Deployments** - No need to transfer files
✅ **Direct Access** - Can directly execute commands locally
✅ **No IP Whitelist** - No need to manage GitHub Actions IPs
✅ **More Secure** - No need to store SSH keys in GitHub

---

## Step 1: Get Runner Token from GitHub

1. Go to your repository settings:
   ```
   https://github.com/tbeetech/glowfmsocialhubdemo/settings/actions/runners/new
   ```

2. Select **Linux** as the operating system

3. You'll see a token like: `AXXXXXXXXXXXXXXXXXXXXX`
   - **Keep this page open** - you'll need this token in Step 3

---

## Step 2: SSH into Your VPS

Use whatever method currently works for you to access your VPS:
- Control panel console (Linode, DigitalOcean, etc.)
- VPN + SSH
- Direct console access

```bash
# If SSH works from another location/network:
ssh root@178.79.187.252
```

---

## Step 3: Install the GitHub Actions Runner

Once connected to your VPS, run these commands:

```bash
# Navigate to a directory for the runner
cd /opt
mkdir actions-runner && cd actions-runner

# Download the latest runner package
curl -o actions-runner-linux-x64-2.311.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.311.0/actions-runner-linux-x64-2.311.0.tar.gz

# Optional: Validate the hash (recommended)
echo "29fc8cf2dab4c195bb147384e7e2c94cfd4d4022c793b346a6175435265aa278  actions-runner-linux-x64-2.311.0.tar.gz" | shasum -a 256 -c

# Extract the installer
tar xzf ./actions-runner-linux-x64-2.311.0.tar.gz
```

---

## Step 4: Configure the Runner

Now configure the runner with your repository:

```bash
# Replace YOUR_TOKEN_HERE with the token from Step 1
./config.sh --url https://github.com/tbeetech/glowfmsocialhubdemo --token YOUR_TOKEN_HERE

# When prompted:
# - Enter the name of runner group: [press Enter for default]
# - Enter the name of runner: [enter something like "vps-runner" or press Enter]
# - Enter any additional labels: [press Enter]
# - Enter name of work folder: [press Enter for default]
```

You should see: ✅ **Runner successfully added**

---

## Step 5: Install Runner as a Service

Make the runner start automatically and run in the background:

```bash
# Install the service
sudo ./svc.sh install

# Start the service
sudo ./svc.sh start

# Check status
sudo ./svc.sh status
```

You should see: `Active: active (running)`

---

## Step 6: Verify Runner is Connected

1. Go to your repository runners page:
   ```
   https://github.com/tbeetech/glowfmsocialhubdemo/settings/actions/runners
   ```

2. You should see your runner with a **green dot** (Idle)

---

## Step 7: Update GitHub Actions Workflow

Now update your workflow to use the self-hosted runner:

```yaml
# .github/workflows/deploy.yml
name: Deploy to VPS

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  deploy:
    runs-on: self-hosted  # Changed from ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Deploy Application
        run: |
          echo "=== Starting Deployment ==="
          
          # We're already in the project directory
          cd /var/www/glowfmsocialhubdemo || exit 1
          
          echo "1. Pulling latest changes..."
          git fetch origin main
          git reset --hard origin/main
          
          echo "2. Installing dependencies..."
          export PNPM_HOME="$HOME/.local/share/pnpm"
          export PATH="$PNPM_HOME:$PATH"
          pnpm install --frozen-lockfile
          
          echo "3. Building application..."
          pnpm run build
          
          echo "4. Restarting PM2..."
          pm2 restart all || pm2 start ecosystem.config.js
          
          echo "5. Checking status..."
          pm2 status
          
          echo "=== Deployment Completed Successfully ==="
```

---

## Step 8: Test the Deployment

1. Commit and push the workflow change:
   ```powershell
   git add .github/workflows/deploy.yml
   git commit -m "Switch to self-hosted runner"
   git push origin main
   ```

2. Watch the deployment:
   - Go to: https://github.com/tbeetech/glowfmsocialhubdemo/actions
   - You should see the workflow running on your self-hosted runner
   - Check the logs for any errors

---

## Managing the Runner Service

### Check Status
```bash
sudo /opt/actions-runner/svc.sh status
```

### Stop Runner
```bash
sudo /opt/actions-runner/svc.sh stop
```

### Start Runner
```bash
sudo /opt/actions-runner/svc.sh start
```

### Restart Runner
```bash
sudo /opt/actions-runner/svc.sh stop
sudo /opt/actions-runner/svc.sh start
```

### View Runner Logs
```bash
sudo journalctl -u actions.runner.* -f
```

### Uninstall Runner
```bash
cd /opt/actions-runner
sudo ./svc.sh stop
sudo ./svc.sh uninstall
./config.sh remove --token YOUR_REMOVAL_TOKEN
```

---

## Troubleshooting

### Runner Not Appearing in GitHub?

1. Check if service is running:
   ```bash
   sudo /opt/actions-runner/svc.sh status
   ```

2. Check logs:
   ```bash
   sudo journalctl -u actions.runner.* -n 50
   ```

3. Verify configuration:
   ```bash
   cd /opt/actions-runner
   cat .runner
   ```

### Workflow Not Using Self-Hosted Runner?

Make sure you:
1. Changed `runs-on: self-hosted` in the workflow
2. Committed and pushed the change
3. The runner shows as "Idle" (green) in GitHub

### Permission Issues?

The runner runs as the user who installed it. If you need different permissions:

```bash
# Run as root
sudo ./config.sh --url https://github.com/tbeetech/glowfmsocialhubdemo --token YOUR_TOKEN --runasservice

# Or create a dedicated user
sudo useradd -m -s /bin/bash github-runner
sudo su - github-runner
# Then follow installation steps
```

### Runner Offline After Reboot?

Check if service is enabled:
```bash
sudo systemctl enable actions.runner.*
sudo systemctl start actions.runner.*
```

---

## Security Best Practices

1. **Run as Non-Root User** (Optional but recommended):
   ```bash
   sudo useradd -m -s /bin/bash github-runner
   sudo usermod -aG sudo github-runner
   # Then install runner as this user
   ```

2. **Limit Runner Access**:
   - Only give access to necessary directories
   - Use separate user for runner vs application

3. **Monitor Runner Logs**:
   ```bash
   sudo journalctl -u actions.runner.* -f
   ```

4. **Keep Runner Updated**:
   - GitHub will notify you in the Actions tab
   - Follow their update instructions

---

## Benefits You'll Get

✅ **Instant Deployments** - No SSH connection delays
✅ **No Firewall Issues** - Everything runs locally
✅ **Better Security** - No SSH keys in GitHub secrets
✅ **Easier Debugging** - Direct access to logs
✅ **Faster Builds** - No file transfers needed
✅ **More Reliable** - No network connectivity issues

---

## Next Steps After Setup

1. Remove SSH-related secrets from GitHub (optional):
   - Go to: https://github.com/tbeetech/glowfmsocialhubdemo/settings/secrets/actions
   - You can delete `VPS_SSH_KEY` (but keep for backup initially)

2. Test multiple deployments to ensure stability

3. Set up monitoring for the runner service

4. Consider creating a separate PM2 ecosystem file for better process management

---

## Quick Reference Commands

```bash
# Runner status
sudo /opt/actions-runner/svc.sh status

# View runner logs
sudo journalctl -u actions.runner.* -f

# PM2 status
pm2 status

# Manual deployment test
cd /var/www/glowfmsocialhubdemo
git pull origin main
pnpm install
pnpm run build
pm2 restart all
```

---

**Need Help?**

If you encounter issues:
1. Check runner logs: `sudo journalctl -u actions.runner.* -n 100`
2. Check GitHub Actions logs in the repository
3. Verify runner is "Idle" (green) in GitHub settings

---

**Last Updated:** November 10, 2025
