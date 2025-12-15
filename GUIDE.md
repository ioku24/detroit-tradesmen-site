
# Website Management Guide

This document outlines how to save your code to GitHub, deploy it to the live internet using Vercel, and collaborate with others.

## Architecture Note
**This is a Vite + React project.** 
It does NOT use Next.js. Vercel should automatically detect "Vite" as the framework.

---

## ⚡ The Smooth Sync Process (Use this daily)

Every time we make changes to the code here, follow these exact 3 steps in your terminal to update the live site:

### 1. Check & Stage
See what files changed, then stage them all for saving.
```bash
git status
git add .
```

### 2. Commit (Save)
Wrap the changes in a named "package" (commit). Replace "Update details" with a short description of what you did.
```bash
git commit -m "Update details"
```

### 3. Push (Deploy)
Send the code to GitHub. **Vercel will see this and automatically update the live site.**
```bash
git push
```

*Note: After running `git push`, wait about 60-90 seconds, and your live URL will be updated.*

---

## Phase 1: First-Time Setup (Do this once)

### 1. Initialize Git
Open your terminal in this project folder and run:
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new).
2. Name your repository (e.g., `detroit-tradesmen-site`).
3. Click **Create repository**.

### 3. Connect Local Code to GitHub
Copy the commands shown on GitHub under "…or push an existing repository from the command line" and run them in your terminal. They will look like this:
```bash
git remote add origin https://github.com/YOUR_USERNAME/detroit-tradesmen-site.git
git branch -M main
git push -u origin main
```

---

## Phase 2: Deploy to Vercel (Do this once)

1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **Add New...** > **Project**.
3. Select the `detroit-tradesmen-site` repository you just created.
4. **Framework Preset**: Ensure this says **Vite** (It should auto-detect).
5. **Output Directory**: Ensure this is `dist`.
6. Click **Deploy**.

---

## Phase 3: Collaborating

### Method A: The "Easy" Way (For quick text/roster updates)
*Best for updating the Roster, Schedule, or News without installing software.*

1.  Go to your repository on **GitHub.com**.
2.  Navigate to the file `lib/data.ts`.
3.  Click the **Pencil Icon** (Edit this file) in the top right corner.
4.  Make your changes to the text.
5.  Click **Commit changes...** (top right), type a message, and click the green **Commit changes** button.
6.  **Vercel will automatically detect this change and update the live site in about 1 minute.**

### Method B: The "Developer" Way (For design changes)
1.  **Make Changes**: I (the AI) generate code changes.
2.  **Sync**: Run the "Smooth Sync Process" (git add, git commit, git push).
3.  **Done**: Vercel rebuilds the site automatically.

---

## Cheat Sheet: Common Commands

| Command | Description |
| :--- | :--- |
| `git status` | Checks which files have been changed. |
| `git add .` | Prepares all changed files to be saved. |
| `git commit -m "message"` | Saves the changes with a note. |
| `git push` | Uploads the saved changes to GitHub (triggers Vercel). |
| `npm run dev` | Starts the local preview server (Vite) to see changes before pushing. |
| `npm run build` | Builds the project for production (Vite Build). |
