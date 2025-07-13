# Mindy - Simple Chat Interface

A minimal chat interface built with Next.js, ready to deploy to Vercel.

## Features

- Simple chat interface with user and AI messages
- Mobile-friendly design
- Mock AI responses
- Real-time typing indicators
- Ready for Vercel deployment

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

Or deploy manually:
```bash
npm run build
```

## Project Structure

- `pages/index.js` - Main chat interface
- `pages/api/chat.js` - API endpoint for mock responses
- `styles/Home.module.css` - Chat component styles
- `styles/globals.css` - Global styles

## Customization

- Modify mock responses in `pages/api/chat.js`
- Update styling in `styles/Home.module.css`
- Add more features as needed

## Tech Stack

- Next.js 14
- React 18
- CSS Modules
- Vercel deployment ready
