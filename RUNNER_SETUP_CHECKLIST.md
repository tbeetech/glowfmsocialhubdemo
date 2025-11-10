# Self-Hosted Runner Setup Checklist

Follow these steps in order:

---

## ☑️ **Step 1: Get GitHub Token**

1. Open: https://github.com/tbeetech/glowfmsocialhubdemo/settings/actions/runners/new
2. Select **Linux**
3. Copy the token (starts with `A...`)
4. Keep this page open

---

## ☑️ **Step 2: Access Your VPS**

Use any method that works:
- Control panel console (Linode, DigitalOcean, etc.)
- SSH from a working location
- VPN + SSH

```bash
ssh root@178.79.187.252
```

---

## ☑️ **Step 3: Run Setup Script**

Copy and paste these commands on your VPS:

```bash
cd /opt
mkdir actions-runner && cd actions-runner

# Download runner
curl -o actions-runner-linux-x64-2.311.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.311.0/actions-runner-linux-x64-2.311.0.tar.gz

# Extract
tar xzf ./actions-runner-linux-x64-2.311.0.tar.gz

# Configure (replace YOUR_TOKEN_HERE with actual token from Step 1)
./config.sh --url https://github.com/tbeetech/glowfmsocialhubdemo --token YOUR_TOKEN_HERE

# Press Enter for all prompts (accept defaults)
```

---

## ☑️ **Step 4: Install as Service**

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

## ☑️ **Step 6: Commit Workflow Changes**

The workflow is already updated to use self-hosted runner. Just commit and push:

```powershell
# Run on your local Windows machine
git add .
git commit -m "Setup self-hosted runner deployment"
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
- ✓ PM2 shows services running
- ✓ Website is live and updated

---

## 🔧 **Quick Commands**

```bash
# Check runner status
sudo /opt/actions-runner/svc.sh status

# View logs
sudo journalctl -u actions.runner.* -f

# Restart runner
sudo /opt/actions-runner/svc.sh stop
sudo /opt/actions-runner/svc.sh start

# Check PM2
pm2 status

# Manual deployment test
cd /var/www/glowfmsocialhubdemo
git pull origin main
pnpm install
pnpm run build
pm2 restart all
```

---

## 📖 **Full Documentation**

See `SETUP_SELF_HOSTED_RUNNER.md` for complete details, troubleshooting, and advanced configuration.

---

**Estimated Time:** 5-10 minutes

**Last Updated:** November 10, 2025
