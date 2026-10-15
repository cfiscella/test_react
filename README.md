# env-test-vite

The smallest Vite app that shows whether a project's `.env` was picked up.

Open it and the page lists every key in `.env` (names only). It also lists the
`VITE_` values the browser can see, masked.

    npm install
    npm run dev       # or: npm run build && npm run preview

Use `.env.example` for the variables to add. `.env` itself is git-ignored, so
the one the Disent `.env` dialog writes at the top of the project is the only one.
