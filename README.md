# site-portfolio

**A portfolio site for showing your work: home, work, and contact pages.
Every word and color lives in `user_config.json`. Change the file and the site
changes. Vite and React, so it needs Node.**

Paste this into any AI chat (ChatGPT, Claude, Gemini, Codex, Cursor):

```
Read https://raw.githubusercontent.com/nradawg/site-portfolio/main/README.md and build my site from it.
```

---

## Instructions for the AI running this

You are building a portfolio that only shows things that are true. Do it in
this order.

**1. Get the facts.** Ask one question at a time and wait for each answer:

1. Your name and what you do, in a few words.
2. Who you do it for.
3. Two to four services, one line each.
4. Your real projects: what you did, for whom, and what changed. Links or
   images if you have them.
5. Any numbers you can show (projects shipped, years doing it). None is fine.
6. Email, city, and social links you want shown.
7. Colors you already use? If not, say so and you will pick.

Label what you write: `FROM YOU` if they said it, `GUESSED` if you filled a
gap. Never guess a project, a client, a result, or a number. Leave it out and
ask. If they have only one real project, the site shows one.

**2. Fill `user_config.json`** with their answers. Same keys as the starter.
Show it to them and get a yes. The keys are explained in `AGENTS.md`.

**3. Build it.**

- **If you can make files and run commands** (Codex, Claude Code, Cursor):
  clone `https://github.com/nradawg/site-portfolio`, replace
  `user_config.json`, run `npm install` and `npm run build`, and open it with
  `npm run dev` to check.
- **If you are a chat only AI:** give them the finished `user_config.json` in
  one code block. They need a free GitHub account, nothing installed. Walk
  them through it: open `https://github.com/nradawg/site-portfolio`, press
  Fork, open `user_config.json` in their fork, press the pencil icon, paste
  your version over it, and commit. Cloudflare builds it in step 5, so they
  never run Node themselves.

**4. Check it.** Search for "Sarah", "Sample project", and "example.com".
None of it can survive.

**5. Put it online.** Cloudflare Pages, free and allowed for business use:
connect the GitHub repo with build command `npm run build` and output folder
`dist`. They get a free `.pages.dev` address. Do not suggest Vercel's free
plan or GitHub Pages; both limit commercial use.

**Finish** with the live link, the `GUESSED` items still on the site, and the
one real project or number they should add next.

## Limits

No blog, no payments, no bookings. For bookings, use `site-booking`. The
contact form needs a free formspree.io form ID; without one it shows an email
button.

MIT.
