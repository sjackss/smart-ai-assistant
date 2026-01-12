# Smart AI Assistant 🤖

Your private AI assistant powered by OpenRouter API and deployed on Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/sjackss/smart-ai-assistant)

## Features

- 💬 Real-time AI chat interface
- 🚀 Serverless architecture with Netlify Functions
- 🔐 Secure API key management
- 🎨 Modern, responsive UI
- 📊 Firebase Analytics integration

## Quick Deploy

### Option 1: One-Click Deploy (Recommended)

1. Click the "Deploy to Netlify" button above
2. Connect your GitHub account
3. Configure environment variables:
   - `OPENROUTER_API_KEY`: Your OpenRouter API key (get it from https://openrouter.ai/)
4. Deploy!

### Option 2: Manual Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Clone the repository
git clone https://github.com/sjackss/smart-ai-assistant.git
cd smart-ai-assistant

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Option 3: Deploy via Netlify Drop

1. Download this repository as ZIP
2. Go to https://app.netlify.com/drop
3. Drag and drop the folder
4. Configure environment variables in Site Settings

## Configuration

### Required Environment Variable

After deployment, add this environment variable in Netlify:

**Site Settings → Environment Variables**

- `OPENROUTER_API_KEY`: Your OpenRouter API key

### Get Your OpenRouter API Key

1. Sign up at https://openrouter.ai/
2. Navigate to API Keys section
3. Create a new API key
4. Add it to your Netlify environment variables

## Project Structure

```
smart-ai-assistant/
├── index.html              # Main chat interface
├── netlify.toml           # Netlify configuration
├── netlify/
│   └── functions/
│       └── ollama-chat.js # Serverless function for AI
├── SECURITY.md
└── README.md
```

## How It Works

1. User sends message through the web interface
2. Frontend calls Netlify Function at `/.netlify/functions/ollama-chat`
3. Function makes secure API call to OpenRouter
4. Response is streamed back to the user

## Tech Stack

- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Backend**: Netlify Functions (Serverless)
- **AI Provider**: OpenRouter API
- **Hosting**: Netlify
- **Analytics**: Firebase

## Local Development

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Run locally
netlify dev
```

Make sure to create a `.env` file:

```
OPENROUTER_API_KEY=your_api_key_here
```

## Security

- API keys are stored as environment variables
- Never committed to repository
- Serverless functions keep backend logic secure
- See SECURITY.md for more details

## License

MIT

## Support

For issues or questions, open a GitHub issue.
