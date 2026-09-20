# TAVREN — Beauty Studio Demo

A fully fictional static commercial demo for a Yerevan beauty-studio website.

## Run
Open `index.html` directly, or use any static server. No build step is required.

Recommended for local development:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Stack
- HTML5
- CSS3
- Vanilla JavaScript
- Static data in `js/data.js`
- No backend
- No framework

## Main demo functionality
- Service catalog with category filters, search, prices and duration
- Portfolio linked to specific services and masters
- Master profiles with skill/language relationships
- Two-location logic
- 7-step appointment flow: service → master → location → date → time → client details → confirmation
- `Any available master` availability resolution
- Time-slot generation from service duration, staff schedules and location hours
- Simulated occupied slots
- Local-only demo confirmation
- `.ics` calendar export
- Gift-card preview flow
- Packages, reviews and FAQ
- EN / HY / RU interface structure
- Responsive mobile-first behavior

## Demo / safety notes
TAVREN is not a real business. All business data, staff, locations, prices, reviews, phone numbers, email addresses and booking confirmations are fictional.

The site uses `noindex,nofollow` and intentionally avoids real LocalBusiness structured data. The booking form never sends user data to a server.

## Photography placeholders
The demo references free-use Pexels photography over HTTPS. Those images are external dependencies. Before any commercial reuse, replace them with client-owned or properly licensed brand photography.
