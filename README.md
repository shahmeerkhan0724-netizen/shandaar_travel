# Shaandaar Travels and Tours – demo website
React + Vite + Tailwind CSS v4.

    npm install
    npm run dev      # local dev server
    npm run build    # production build

## Edit content
- Business details / social URLs: `src/config/business.js` (empty social URLs are hidden)
- Services, packages, reviews: `src/data/*.js`
- Images: `src/utils/images.js` (Unsplash IDs; failed images fall back to a navy gradient)
- Form delivery: set `VITE_FORM_ENDPOINT` in `.env` (e.g. a Formspree URL). Without it the form runs in demo mode and stores/delivers nothing.

## Still to confirm with the owner
Package prices, durations, inclusions and availability; Instagram/Facebook URLs; email address; opening hours; permission to display the review excerpts; final photography (stock photos must not be presented as the agency's office or staff).
