# VPS Deployment Troubleshooting Guide

## Current Error: SSH Connection Timeout

**Error Message:** `dial tcp ***:22: i/o timeout`

This means GitHub Actions cannot connect to your VPS. Here's how to fix it:

---

## Immediate Actions Required

### 1. Verify VPS Connection Details

SSH into your VPS manually first to verify it's accessible:

```powershell
ssh root@178.79.187.252
```

If this works, proceed to step 2. If not:
- Check if your VPS is running
- Verify the IP address is correct
- Check if SSH service is running: `systemctl status sshd`

---

### 2. Check GitHub Actions IP Whitelist

**Problem:** Your VPS firewall may be blocking GitHub Actions IPs.

**Solution:** You have two options:

#### Option A: Allow GitHub Actions IPs (Recommended)

GitHub Actions uses dynamic IPs from these ranges. Add them to your firewall:

```bash
# Get current GitHub Actions IP ranges
curl https://api.github.com/meta | jq -r '.actions[]'

# Example UFW rules (run on your VPS)
sudo ufw allow from 13.64.0.0/16 to any port 22
sudo ufw allow from 13.65.0.0/16 to any port 22
sudo ufw allow from 13.66.0.0/16 to any port 22
# ... add all GitHub Actions IP ranges
```

#### Option B: Use Self-Hosted Runner (Better Alternative)

Instead of using GitHub's runners, host your own runner on the VPS:

```bash
# On your VPS
cd /opt
mkdir actions-runner && cd actions-runner

# Download runner (check latest version at github.com/actions/runner/releases)
curl -o actions-runner-linux-x64-2.311.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.311.0/actions-runner-linux-x64-2.311.0.tar.gz
tar xzf ./actions-runner-linux-x64-2.311.0.tar.gz

# Configure (get token from: https://github.com/tbeetech/glowfmsocialhubdemo/settings/actions/runners/new)
./config.sh --url https://github.com/tbeetech/glowfmsocialhubdemo --token YOUR_TOKEN

# Install as service
sudo ./svc.sh install
sudo ./svc.sh start
```

Then update `.github/workflows/deploy.yml` to use self-hosted runner:
```yaml
jobs:
  deploy:
    runs-on: self-hosted  # Change from ubuntu-latest
```

---

### 3. Verify SSH Key Format

Your GitHub Secret `VPS_SSH_KEY` must be in the correct format:

```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
...your key content...
-----END OPENSSH PRIVATE KEY-----
```

**Important:** 
- Include the BEGIN and END lines
- No extra spaces or line breaks
- Copy the ENTIRE private key file

To verify your key on VPS:
```bash
ssh root@178.79.187.252
cat ~/.ssh/authorized_keys
# Should show the public key matching your private key
```

---

### 4. Setup Git Remote on VPS

SSH into your VPS and configure the git repository:

```bash
# Connect to VPS
ssh root@178.79.187.252

# Navigate to project
cd /var/www/glowfmsocialhubdemo

# Check current remote
git remote -v

# If no remote or wrong remote, set it up:
git remote remove origin  # if exists but wrong
git remote add origin https://github.com/tbeetech/glowfmsocialhubdemo.git

# Test connection
git fetch origin main
```

**Note:** Using HTTPS instead of SSH for the remote avoids needing GitHub SSH keys on the VPS.

---

### 5. Install Required Tools on VPS

Ensure all necessary tools are installed:

```bash
# On your VPS
ssh root@178.79.187.252

# Install Node.js (if not installed)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm
npm install -g pnpm

# Install PM2
npm install -g pm2

# Verify installations
node --version
pnpm --version
pm2 --version
git --version
```

---

### 6. Create PM2 Ecosystem File

Create `ecosystem.config.js` in your project root:

```bash
cd /var/www/glowfmsocialhubdemo
nano ecosystem.config.js
```

Add this content:

```javascript
module.exports = {
  apps: [
    {
      name: 'glowfm-web',
      cwd: './apps/web',
      script: 'pnpm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },
    {
      name: 'glowfm-api',
      cwd: './apps/api',
      script: 'pnpm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 4000
      }
    }
  ]
};
```

Start services:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

---

## Alternative: Manual Deployment Script

If GitHub Actions continues to fail, use this manual deployment script:

Create `deploy-manual.sh` locally:

```bash
#!/bin/bash
ssh root@178.79.187.252 << 'ENDSSH'
  cd /var/www/glowfmsocialhubdemo
  git pull origin main
  export PNPM_HOME="$HOME/.local/share/pnpm"
  export PATH="$PNPM_HOME:$PATH"
  pnpm install --frozen-lockfile
  pnpm run build
  pm2 restart all
ENDSSH
```

Run it:
```powershell
bash deploy-manual.sh
```

---

## Testing the Fixed Workflow

After making changes above:

1. **Test SSH connection from your local machine:**
   ```powershell
   ssh root@178.79.187.252 "echo 'Connection successful'"
   ```

2. **Test the deployment script manually:**
   ```powershell
   ssh root@178.79.187.252 "cd /var/www/glowfmsocialhubdemo && git fetch origin main && git status"
   ```

3. **Commit and push your changes:**
   ```powershell
   git add .
   git commit -m "Fix deployment workflow with better error handling"
   git push origin main
   ```

4. **Monitor GitHub Actions:**
   - Go to: https://github.com/tbeetech/glowfmsocialhubdemo/actions
   - Watch the deployment progress
   - Check logs for any errors

---

## Quick Diagnostics Checklist

Run these commands on your VPS to verify setup:

```bash
# 1. Check if directory exists
ls -la /var/www/glowfmsocialhubdemo

# 2. Check git status
cd /var/www/glowfmsocialhubdemo && git status

# 3. Check git remote
git remote -v

# 4. Check if tools are installed
which node pnpm pm2 git

# 5. Check firewall rules
sudo ufw status

# 6. Check SSH service
systemctl status sshd

# 7. Check SSH authorized keys
cat ~/.ssh/authorized_keys
```

---

## Recommended Solution

**Best approach:** Use a self-hosted GitHub Actions runner on your VPS. This eliminates:
- SSH connection issues
- Firewall complications
- IP whitelist management
- SSH key authentication problems

The runner runs directly on your VPS and can access everything locally.

---

## Need More Help?

1. Check GitHub Actions logs: https://github.com/tbeetech/glowfmsocialhubdemo/actions
2. Check VPS logs: `sudo journalctl -u sshd -n 50`
3. Test connectivity: `ping 178.79.187.252`
4. Verify firewall: `sudo ufw status verbose`

---

**Last Updated:** November 10, 2025
