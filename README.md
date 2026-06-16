# HR Comeback Training Suite — React App

This project is now a full React-based HR training platform built with Vite.

## What it includes
- React + React Router navigation across training sections
- Dashboard with progress tracking and training commitments
- Module Academy with deep module detail pages, concepts, terms, and step-by-step lab tasks
- Knowledge Hub with searchable HR definitions and explanations
- Tools Lab with in-depth tool training and practice actions
- Resume Lab with rewrite guidance, star stories, and copyable templates
- Interview Lab with question tips, case study approaches, and mastery guidance

## Run the app
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local Vite URL shown in the terminal.

## Build for production
```bash
npm run build
```

## Deploying publicly (make the site available anywhere)

You can deploy the `dist/` folder so the app is reachable from any device and phone via a public URL. Two quick options:

- GitHub Pages (uses CI): push to `main` and the included workflow will deploy to GitHub Pages.
- Netlify / Vercel: connect the repo, set `npm run build` and publish `dist`.

Example local preview commands:

```powershell
cd "c:\Users\User\hr-comeback"
npm install
npm run build
npm run preview
```

If you want, I can add `netlify.toml` or `vercel.json` for simpler one-click deploys.

## Notes
- Progress is stored in localStorage so your learning state persists.
- The app is designed as a complete HR knowledge hub, not just a checklist.
- Use the sidebar to navigate between dashboard, modules, knowledge, tools, resume and interview labs.
