# Quick Deployment Guide

## The Easiest Way to Deploy Your AI Assistant

Since the GitHub OAuth is having issues, here's the simplest method:

### Step 1: Get Your OpenRouter API Key

You already have one! From your OpenRouter dashboard:
- **Key**: `sk-or-v1-4fa...1f3` (Smart AI Assistant - Netlify)

### Step 2: Deploy Using Netlify CLI

Open your terminal and run these commands:

```bash
# Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# Navigate to your project
cd ~/path/to/smart-ai-assistant

# Login to Netlify (will open browser)
netlify login

# Deploy your site
netlify deploy --prod
```

When prompted:
- **Publish directory**: `.` (just press Enter)

### Step 3: Add Your API Key

After deployment completes:

1. Go to your Netlify dashboard
2. Click on your new site
3. Go to **Site settings** → **Environment variables**
4. Click **Add a variable**
5. Set:
   - **Key**: `OPENROUTER_API_KEY`
   - **Value**: Your OpenRouter API key (sk-or-v1-4fa...1f3)
6. Click **Save**
7. Go to **Deploys** and click **Trigger deploy** → **Deploy site**

### Step 4: Test Your Site

Your site will be live at something like:
`https://wonderful-name-123456.netlify.app`

Visit it and try chatting with your AI assistant!

---

## Alternative: Netlify Drop (No CLI Required)

1. Download this repo: Click **Code** → **Download ZIP**
2. Extract the ZIP file
3. Go to: https://app.netlify.com/drop
4. Drag the extracted folder onto the page
5. Follow Step 3 above to add your API key

---

## Troubleshooting

### "API key not configured" error
- Make sure you added the `OPENROUTER_API_KEY` environment variable
- Redeploy after adding it

### Site not loading
- Check Netlify deploy logs for errors
- Make sure all files were uploaded

### API calls failing
- Verify your OpenRouter API key is valid
- Check you have credits in your OpenRouter account

---

## Your Configuration

- **Repository**: https://github.com/sjackss/smart-ai-assistant  
- **AI Model**: `meta-llama/llama-3.2-3b-instruct:free`
- **Provider**: OpenRouter API
- **Hosting**: Netlify
- **Functions**: Serverless (Netlify Functions)

---

## Need Help?

Open an issue on GitHub or check the full README.md for more details.
