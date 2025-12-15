
# Website Management Guide

This document outlines how to save your code to GitHub and deploy it to the live internet using Vercel.

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
4. Click **Deploy**.
5. Wait ~2 minutes. Your site is now live!

---

## Phase 3: How to Update Your Site (The Routine)

Whenever you (or I) make changes to the code, follow these steps to update the live website:

### 1. Make Changes
*   Ask me to update the roster, change a photo, or add a news article.
*   I will generate the code changes.

### 2. Save & Push
Run these three commands in your terminal:

```bash
# 1. Stage the changes
git add .

# 2. Save them with a message describing what you did
git commit -m "Updated roster photos"

# 3. Send them to the cloud
git push
```

### 3. Done!
*   Vercel will detect the `git push`.
*   It will automatically rebuild your website.
*   The changes will be live in about 60 seconds.

---

## Cheat Sheet: Common Commands

| Command | Description |
| :--- | :--- |
| `git status` | Checks which files have been changed. |
| `git add .` | Prepares all changed files to be saved. |
| `git commit -m "message"` | Saves the changes with a note. |
| `git push` | Uploads the saved changes to GitHub (triggers Vercel). |
| `npm run dev` | Starts the local preview server to see changes before pushing. |
