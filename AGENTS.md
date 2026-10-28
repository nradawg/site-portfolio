# Rules for the AI editing this site

`user_config.json` is the source of truth. The pages import it, so changing
the config changes the site. Edit the config first. Touch the code only for
layout changes the config cannot express.

## What each key does

- **site_name, role, headline, intro:** nav, tab title, home hero.
- **colors:** set as CSS variables in `src/main.jsx`, used everywhere as
  `var(--primary)`, `var(--secondary)`, `var(--accent)`.
- **services:** the cards on the home page.
- **projects:** the Work page. `image` and `link` can be empty.
- **stats:** a row of numbers on the home page. Empty means no row.
- **social:** footer and contact links. Empty means no link.
- **formspree_id:** the ID from a free formspree.io form. Empty means the
  contact page shows an email button instead of a form.

## Never

- Never write a project, client, result, stat, or testimonial the person did
  not give you. "Reduced drop off by 40%" is a claim someone will ask about.
  Two real projects beat six invented ones.
- Never leave the sample entries live. Before you call it done, search for
  "Sarah", "Sample project", and "example.com".
- Never paste someone else's Formspree ID. Messages go to whoever owns it.

## Check before you call it done

Run `npm install` and `npm run build`. It must build with no errors. Check
it at 375px wide and at 1440px wide.

## Hosting

Host it on **Cloudflare Pages**, free, commercial use allowed. Connect the
GitHub repo with build command `npm run build` and output folder `dist`, or
run the build and upload the `dist` folder. They get a free `.pages.dev`
address.

Do not use Vercel's free Hobby plan or GitHub Pages for a business. Both
limit commercial use in their own terms.
