# Deployment Guide

## Deploying to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**: Visit [vercel.com](https://vercel.com)

2. **Sign in with GitHub**: Use your GitHub account (AlexD-Great)

3. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `Flow-Collectibles-Tracker`
   - Click "Import"

4. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)

5. **Environment Variables** (Add these in Vercel dashboard):
   ```
   NEXT_PUBLIC_FLOW_NETWORK=mainnet
   NEXT_PUBLIC_ACCESS_NODE_API=https://rest-mainnet.onflow.org
   NEXT_PUBLIC_DISCOVERY_WALLET=https://fcl-discovery.onflow.org/authn
   NEXT_PUBLIC_WALLET_DISCOVERY=https://fcl-discovery.onflow.org/api/authn
   NEXT_PUBLIC_APP_NAME=Flow Collectibles Tracker
   ```

6. **Deploy**: Click "Deploy"

7. **Wait**: Vercel will:
   - Install dependencies (`npm install`)
   - Build the project (`npm run build`)
   - Deploy to production

8. **Get URL**: Once deployed, you'll get a URL like:
   - `https://flow-collectibles-tracker.vercel.app`
   - Or a custom domain if you set one up

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? flow-collectibles-tracker
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

### After Deployment

1. **Test the live site**: Visit your Vercel URL
2. **Test wallet connection**: Click "Connect Wallet" and verify FCL works
3. **Update README**: Add the live demo link
4. **Share**: Post on Twitter/Discord about your progress!

### Automatic Deployments

Once connected, Vercel will automatically deploy:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request

### Environment Variables

If you need to add more environment variables later:
1. Go to your project in Vercel dashboard
2. Settings → Environment Variables
3. Add new variables
4. Redeploy for changes to take effect

### Custom Domain (Optional)

To add a custom domain:
1. Go to project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)

### Troubleshooting

**Build fails?**
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify environment variables are set

**Wallet connection doesn't work?**
- Check browser console for errors
- Verify Flow network environment variables are set
- Test on different browsers

**Need to redeploy?**
- Push a new commit to GitHub (auto-deploys)
- Or click "Redeploy" in Vercel dashboard
