# Indian Tent House Website: ITH-V6 (Rajwada royal theme)

Plain HTML + CSS + JavaScript. No build step, no server needed. Double-click `index.html` to preview.

## Files
- `index.html`: the page (all sections and English + Hindi text)
- `css/style.css`: royal theme styling
- `js/config.js`: EDIT THIS: contacts, Google links, gallery photos/text, reviews
- `js/main.js`: behaviour (curtain, 3D ring, build animation, language, forms). No edit needed
- `images/`: your photos (keep the file names, or change them in `config.js`)
- `404.html`, `manifest.json`, `robots.txt`, `.nojekyll`: extras for GitHub Pages

## Edit details (js/config.js)
- `tel1`, `tel2`, `tel3`: `n` is shown on the site, `h` is the call link (+91...)
- `wa`: WhatsApp number, digits only with country code. The enquiry form and all WhatsApp buttons use it
- `email`, `address`, `hours`
- `maps`: Google Maps place link, `dir`: directions link, `review`: write-a-review link, `gbp`: Google Business Profile link
- `G`: gallery cards (`t` title, `m` label, `d` description, `img` photo)
- `R`: reviews (`n` name, `r` event, `s` stars, `t` text)

## Security and privacy notes
- No cookies, analytics, trackers or database. The enquiry form only builds a WhatsApp message on the visitor's device (see `privacy.html`).
- `index.html` has a Content-Security-Policy: only your own scripts run, no other site can inject code, no network calls are allowed, and there are no iframes.
- All outside links open with `noopener noreferrer`, and the site sends no referrer.
- `config.js` links are checked in code (only https links are accepted) and phone numbers and email are cleaned before use.
- Form input is limited, cleaned of control characters and `< >`, and a hidden field catches simple bots.
- Do not put passwords, API keys or private numbers in any file. Everything in this folder is public once it is on GitHub.
- GitHub Pages: after step 3, tick "Enforce HTTPS" under Settings > Pages. Turn on two-factor login for your GitHub account.
- Fonts come from Google Fonts. To avoid that completely, download the fonts, put them in a `fonts/` folder and ask for a self-hosted version.
