# Self-Hosted Runner Setup Checklist

**Important:** All configuration is managed through Git. Never edit files directly on the VPS to avoid merge conflicts.

Follow these steps in order:

---

## ☑️ **Step 1: Create Project Directory on VPS**

Access your VPS and create the project directory (this is the ONLY manual step needed):

```bash
# SSH into VPS
ssh root@178.79.187.252

# Create project directory
sudo mkdir -p /var/www/glowfmsocialhubdemo
cd /var/www/glowfmsocialhubdemo

# Initialize git and pull code from GitHub
git init
git remote add origin https://github.com/tbeetech/glowfmsocialhubdemo.git
git fetch origin main
git reset --hard origin/main

# Install pnpm if not installed
npm install -g pnpm

# Install PM2 if not installed
npm install -g pm2

# Initial build
export PNPM_HOME="$HOME/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"
pnpm install --frozen-lockfile
pnpm run build

# Start PM2 (will use ecosystem.config.js from Git)
pm2 start ecosystem.config.js
pm2 save
pm2 startup  # Follow the command it gives you
```

---

## ☑️ **Step 2: Get GitHub Token**

1. Open: https://github.com/tbeetech/glowfmsocialhubdemo/settings/actions/runners/new
2. Select **Linux**
3. Copy the token (starts with `A...`)
4. Keep this page open

---

## ☑️ **Step 3: Install GitHub Actions Runner on VPS**

Still on your VPS, run these commands:

```bash
cd /opt
mkdir actions-runner && cd actions-runner

# Download runner
curl -o actions-runner-linux-x64-2.311.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.311.0/actions-runner-linux-x64-2.311.0.tar.gz

# Extract
tar xzf ./actions-runner-linux-x64-2.311.0.tar.gz

# Configure (replace YOUR_TOKEN_HERE with actual token from Step 2)
./config.sh --url https://github.com/tbeetech/glowfmsocialhubdemo --token YOUR_TOKEN_HERE

# Press Enter for all prompts (accept defaults)
```

---

## ☑️ **Step 4: Install Runner as Service**

```bash
# Install service
sudo ./svc.sh install

# Start service
sudo ./svc.sh start

# Verify it's running
sudo ./svc.sh status
```

You should see: **Active: active (running)**

---

## ☑️ **Step 5: Verify in GitHub**

1. Go to: https://github.com/tbeetech/glowfmsocialhubdemo/settings/actions/runners
2. You should see your runner with a **green dot** (Idle)

---

## ☑️ **Step 6: Test Deployment**

Workflow is already configured. Just push any change:

```powershell
# Run on your local Windows machine
git add .
git commit -m "Test self-hosted runner deployment"
git push origin main
```

---

## ☑️ **Step 7: Watch Deployment**

1. Go to: https://github.com/tbeetech/glowfmsocialhubdemo/actions
2. The workflow should automatically start
3. Watch it deploy using your self-hosted runner!

---

## ✅ **Success Indicators**

- ✓ Runner shows "Idle" with green dot in GitHub
- ✓ Workflow runs on "self-hosted" runner
- ✓ Deployment completes successfully
- ✓ PM2 shows services running: `glowfm-web`, `glowfm-api`, `glowfm-workers`
- ✓ Website is live and updated

---

## 🎯 **Git-First Workflow (Important!)**

**NEVER edit files directly on the VPS!** Always:

1. ✅ Make changes in your local repo
2. ✅ Commit to Git: `git commit -m "your message"`
3. ✅ Push to GitHub: `git push origin main`
4. ✅ GitHub Actions automatically deploys to VPS
5. ✅ VPS pulls code from GitHub (no local modifications)

**Benefits:**
- No merge conflicts
- Single source of truth (GitHub)
- Full version history
- Easy rollbacks
- Consistent deployments

---

## 🔧 **Quick Commands (On VPS)**

```bash
# Check runner status
sudo /opt/actions-runner/svc.sh status

# View runner logs
sudo journalctl -u actions.runner.* -f

# Check PM2 services
pm2 status
pm2 logs

# Manual sync with GitHub (if needed)
cd /var/www/glowfmsocialhubdemo
git fetch origin main
git reset --hard origin/main  # Discards any local changes
git clean -fd  # Removes untracked files
pnpm install
pnpm run build
pm2 reload ecosystem.config.js

# View latest commit
cd /var/www/glowfmsocialhubdemo
git log -1 --oneline
```

---

## 📖 **Configuration Files (All in Git)**

All configuration is version-controlled:
- ✅ `ecosystem.config.js` - PM2 configuration
- ✅ `.github/workflows/deploy.yml` - Deployment workflow
- ✅ `package.json` - Dependencies
- ✅ All app configuration files

**To modify any config:**
1. Edit locally
2. Commit and push
3. GitHub Actions deploys automatically

---

## 📖 **Full Documentation**

See `SETUP_SELF_HOSTED_RUNNER.md` for complete details, troubleshooting, and advanced configuration.

---

**Estimated Setup Time:** 10-15 minutes (one-time setup)

**Estimated Deploy Time:** 2-5 minutes (automatic on every push)

**Last Updated:** November 10, 2025
