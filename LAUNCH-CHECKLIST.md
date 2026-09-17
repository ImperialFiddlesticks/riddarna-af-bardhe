# Launch checklist

Pre-publish todo list. Check items off as they're done; move anything that turns out to be post-launch-acceptable into "Can wait."

## Blockers (will break or 404 in production)

- [x] ~~`om-oss/index.tsx:47` uses `src="/public/föreningen.jpg"` — wrong path, will 404.~~ Fixed — now `/föreningen.jpg`, and the image's `items-stretch` distortion bug is also fixed (`.history-image` in `om-oss.css`).

## New pages to build

- [ ] **Contact page** (`/kontakt`) — currently linked from the footer (`Footer.tsx:37`) and 3 CTAs on `/evenemang`, but the route doesn't exist. Build a real contact page with a working form; needs a way to actually deliver submissions to an email address (form backend/service, e.g. Formspree/Netlify Forms/a small API route — decide which before building).
- [ ] **"Bli Medlem" page** — replaces the current dead `href="mailto:"` stub on the "Bli medlem" button (`föreningen/index.tsx:43`). Needs: info on how to join (requirements, cost, process), and a form to sign up — same email-form setup as Kontakt (decide the actual delivery mechanism once for both).
- [ ] **Gallery, organized by past event** — supersedes the flat 6-box "Galleri" placeholder currently on `/föreningen` (`91-95`). Two parts: (1) a small preview grid staying on `/föreningen`, linking out; (2) a full gallery page (new route, e.g. `/galleri`) with a section per past event and that event's photos.

## Content (placeholder text/data still live)

- [ ] Homepage (`routes/index.tsx:30-35,49-55`) — replace Lorem ipsum sections.
- [ ] **`/evenemang`** — finish the page properly: real information for each event type (Riddaruppvisningar, Bröllop, Svensexor & Möhippor — currently Lorem ipsum at `124-125,144-145,164-165`) and real photos for each type instead of the 3 empty placeholder boxes (`32,79,88,131,140,171`).
- [ ] **`/föreningen` — Om föreningen**: replace Lorem ipsum (`22-24`) with real information about the association, and add a photo (currently none).
- [ ] **`/föreningen` — Medlemskap**: replace Lorem ipsum (`40-42`) with real membership info, names, and photos (currently text-only placeholder).
- [ ] **`/föreningen` — Styrelsen**: replace the 5× "Namn Namnsson" placeholder board members (`60-65`) with real names, roles, and photos.
- [ ] `/kalender` intro paragraph is Lorem ipsum (`62-65`); double-check `src/data/events.ts` has real, current dates.
- [ ] `src/data/horses.ts` — all 5 horses are named "Blackie"/"Blackie2-5" using the same image. Needs real horse names/photos.
- [ ] `src/data/knights.ts` — 3 of 5 knights still have the placeholder tagline "Lorem ipsum dolor sit amet."
- [ ] **Add missing knights to `/riddare`** — only 5 are in `src/data/knights.ts`, but `public/` has portrait photos for at least 3 more not yet added: `Wenngarn-Liselotte-Riddar-Tre-Ax.jpg` (likely "Riddar Tre Ax"), `Wenngarn-Richard-Riddaren-Stormgrip.jpg` (likely "Riddaren Stormgrip"), `Wenngarn-Thomas-Gyllene-Hjorten.jpg` (likely "Gyllene Hjorten"). Need full names, taglines, and favorite weapon for each before adding.

## Navigation

- [ ] Blog route exists (`routes/blogg/`) but isn't in `Header.tsx` nav — only reachable by typing the URL. Add it, or leave it out on purpose if blog isn't ready to be public-facing yet.

## Assets

- [ ] ~65 images sit in `public/`, only ~16 are referenced in code. Most unused ones are good candidates to fill the placeholder boxes above (Wenngarn-*, Riddarkamp1/2.jpg, Uppstallning.jpg, etc.) rather than new photos.
- [ ] `shield brown.png` has a space in the filename — rename before referencing it anywhere (spaces in URLs are fragile).
- [ ] Once placeholders are filled, delete whatever photos stay genuinely unused so `public/` doesn't bloat the deploy.

## SEO / metadata

- [ ] `index.html` — set a real `<title>` (currently "riddarna-af-bardhe"), add a meta description, add Open Graph tags.
- [ ] Replace favicon — still the default `/vite.svg`.
- [ ] Add `robots.txt` and `sitemap.xml` to `public/`.

## Deploy

- [ ] No deploy config yet (no `netlify.toml` / `vercel.json` / GitHub Actions workflow). Decide hosting and add config.
- [ ] `src/api/wordpress.ts` hardcodes the production WP URL (`https://www.bardhe.se/wp-json/wp/v2`) for the blog. Confirm that site/API stays up and has real posts before launch — it's a live external dependency, not a mock.

## Can wait (doesn't block publishing)

- [ ] `src/api/wordpress.ts` + `src/lib/mappers.ts` (`mapWPKnightToKnight`) are dead code — an in-progress migration of knight data to WordPress that nothing calls yet. `riddare/$knightId.tsx` still reads from static `src/data/knights.ts`. Fine to leave mid-migration, just don't forget it's unfinished.
- [ ] `wordpress.ts:51,53,59` — error strings use `${slug}` in non-template strings, so it won't interpolate. Cosmetic, only visible in logs.
- [ ] `blogg/index.tsx` / `blogg/$slug.tsx` use `dangerouslySetInnerHTML` for WP content — fine since it's trusted CMS content, just noting no sanitization is applied.
- [ ] Mobile/responsive pass — do a manual pass in dev tools once content is in place; static read didn't turn up obviously broken fixed-width layouts, but nothing was visually verified.
