
# Detroit Tradesmen RFC - Official Website

This is the official web application for the Detroit Tradesmen Rugby Football Club, Michigan's Premier Men's Rugby Club.

## Technical Architecture

- **Architecture:** Client-Side Rendered SPA (Single Page Application)
- **Entry Point:** `index.html` -> `index.tsx` -> `App.tsx`
- **Routing:** Manual state-based routing in `App.tsx` (Simple & Lightweight)
- **Styling:** Tailwind CSS (configured in `tailwind.config.ts`)

## File Structure

- **`/lib`**: 
  - `types.ts`: **Central Truth**. All TypeScript interfaces (Match, Player, etc.) live here.
  - `data.ts`: **Content**. Static data arrays that populate the site.
- **`/components`**:
  - `layout/`: Global Shell (Header, Footer).
  - `home/`: Landing page specific sections.
  - `pages/`: Full page views (Schedule, Roster, etc.).
  - `shared/`: Reusable UI bricks (Buttons, Cards).

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

## Branding

- **Colors:** Navy (`#0a0f1c`), Blue (`#3b82f6`), Gold (`#d4a574`).
- **Typography:** Oswald (Headings), Inter (Body).
