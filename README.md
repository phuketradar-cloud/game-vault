# MAX GAME VAULT

A minimal gallery of my browser games. React + Vite, deployed to GitHub Pages.

## Add a game
Put the cover in `public/covers/` and add an entry to `src/games.json`:

```json
{ "title": "My Game", "image": "covers/my-game.webp", "description": "One short line.", "url": "https://..." }
```

`image` may also be a full URL. Commit and push to `main` – the workflow deploys automatically.

## Develop
`npm install`, `npm run dev`, `npm run build`.

## Deploy
Push to GitHub, then Settings → Pages → Source: **GitHub Actions**.
