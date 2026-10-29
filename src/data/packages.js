import { IMAGES } from '../utils/images.js'
// DEMO CONTENT: no prices, dates, durations or inclusions have been confirmed. Update when the owner supplies verified details.
export const packages = [
  { destination: 'Dubai', image: IMAGES.dubai, alt: 'Dubai skyline with skyscrapers', desc: 'City skyline, shopping and desert experiences.' },
  { destination: 'Turkey', image: IMAGES.turkey, alt: 'Istanbul mosque and skyline', desc: 'Istanbul architecture, culture and cuisine.' },
  { destination: 'Switzerland', image: IMAGES.swiss, alt: 'Swiss mountains and lake', desc: 'Alpine scenery, lakes and scenic journeys.' },
  { destination: 'United Kingdom', image: IMAGES.uk, alt: 'London street and landmarks', desc: 'London landmarks and historic cities.' },
  { destination: 'Europe', image: IMAGES.europe, alt: 'Historic European city street', desc: 'Multi-city European travel arrangements.' },
  { destination: 'International Holiday Packages', image: IMAGES.holiday, alt: 'Tropical beach holiday destination', desc: 'Holiday ideas beyond the destinations above.' },
].map((p) => ({ ...p, duration: 'Duration: to be confirmed', price: 'Contact for Pricing' }))
