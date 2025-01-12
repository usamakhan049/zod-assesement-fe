# React Typescript Vite App

A straightforward React application designed to fetch and present GitHub user profiles and their corresponding repositories. It offers a clear and efficient interface for users to access and explore relevant information.

## Features

- Github user and repostories fetching
- Dark and Light Mode
- Modern UI using Tailwind css and custom components

## Prerequisites

- Node.js

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

## Deployment

1. Build the project:

```bash
npm run build
```

2. Deploy to your preferred hosting platform.

### Manual Deployment Alternative

1. Build your project

```bash
npm run build
```

2. Deploy the `dist` folder to your preferred hosting platform (Vercel, Netlify, etc.)

3. Set up the following environment variables in your hosting platform:

```env
VITE_GITHUB_TOKEN=your_github_token
VITE_GITHUB_USERNAME=your_github_username
```

4. Configure your hosting platform to:
   - Use Node.js
   - Set the build command to `npm run build`
   - Set the publish directory to `dist`
   - Add the redirect rule for SPA routing (/\* → /index.html)

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
VITE_GITHUB_TOKEN=your_github_token
VITE_GITHUB_USERNAME=your_github_username
```

## Project Structure

- `/src/components/` - React custom components
  - `Button.jsx` - Custom usable Button component
  - `Input.jsx` - Custom usable Input component
  - `Image.jsx` - HOC for circluar images 
- `/src/pages/` - React pages components
  - `Home.jsx` - Protected home page component
- `App.jsx` - Main application component with routing

## Technologies Used

- React
- React Query (@tanstack/react-query)
- Tailwind CSS
- React Router DOM
- Jest
- React testing library
