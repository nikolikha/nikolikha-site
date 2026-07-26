# nikolikha — personal fan site

A static site (plain HTML/CSS/JS, no build step) with the nav/section logic of your
Carrd reference, a peach-and-cream palette built around your accent color `#F2CA9C`,
and an interactive book & movie rating tool built from your `Book_Movie_Rater.xlsx` logic.

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `yourname.github.io` for a root site, or any name for a project site).
2. Push everything in this folder to the repo's default branch:
   ```
   git init
   git add .
   git commit -m "first version of the site"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source → Deploy from a branch → main / (root)** → Save.
4. Your site will be live at `https://yourusername.github.io/your-repo/` within a minute or two.

No build tools, no `npm install` — it's ready to serve as-is.

## Pages

| Page | What's on it |
|---|---|
| `index.html` | Avatar, intro, currently-reading/watching, links to every other page |
| `profile.html` | About/BYF, DNFI, a short Notes section (replaces the old standalone blog), socials |
| `gallery.html` | Your graphic design posters, in a grid with a lightbox |
| `books.html` | All-time favorite books, then the rating tool tucked behind an "Open the rater" button |
| `movies.html` | Same, for movies/shows |
| `music.html` | Ults, bias, and what's currently on repeat |

## What to edit first

| What | Where |
|---|---|
| Site name, tagline, socials, nav links | `js/config.js` |
| Your profile picture | drop a photo in as `assets/avatar.jpg` (same filename — no code change needed) |
| Homepage copy, currently reading/watching | `index.html` |
| About / BYF / DNFI / notes | `profile.html` |
| Favorite books | `books.html` (the `fave-item` blocks near the top) |
| Favorite movies/shows | `movies.html` (same pattern) |
| Graphic design posters | `js/gallery-data.js` (add image files to `assets/gallery/`) |
| Currently-listening / ults / bias | `music.html` |

## The avatar

`.avatar` in `css/style.css` is a soft, rounded-but-not-circular frame (not a plain circle,
per your note) that shows `assets/avatar.jpg` if it exists, or a peach gradient placeholder
if it doesn't — so nothing breaks before you've added a real photo. It appears large on the
homepage and profile page. Just drop your photo in at `assets/avatar.jpg`.

## The book & movie rating tool

`js/rating-data.js` holds all four rating systems (fiction movie, fiction book,
non-fiction movie, non-fiction book) exactly as weighted in your spreadsheet —
every question, weight, and answer option was pulled directly from the formulas
in `Book_Movie_Rater.xlsx`, and the math was checked against your original
entries (Gravity → 62.5, Catching Fire → 100) to confirm it matches.

- On `books.html` / `movies.html`, the rater is collapsed by default behind an
  **"Open the rater"** button, so the page leads with your favorites instead of a long form.
- `js/rating-tool.js` renders the questionnaire and computes the live score,
  star rating, and letter grade the same way the spreadsheet did.
- Nothing a visitor rates is saved anywhere on the site — there's no database
  or log. Once they've answered, they can click **"Download my rating as an
  image"** to render a shareable result card (title, score, stars, grade,
  category breakdown) and save it as a PNG. This uses
  [html2canvas](https://html2canvas.hertzen.com/), loaded from a CDN
  (`cdnjs.cloudflare.com`) — no install needed, but it does mean the download
  button requires an internet connection to work.

If you ever change the weights or questions in the spreadsheet, re-generate
`rating-data.js` from it, or edit the object in that file directly — the
structure is plain JSON.

## Local preview

Any static file server works, e.g. from this folder:
```
python3 -m http.server 8000
```
then open `http://localhost:8000`.
