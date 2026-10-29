import { FaWhatsapp, FaStar } from 'react-icons/fa'
import { FiStar, FiMessageCircle, FiUsers, FiCheckCircle } from 'react-icons/fi'
import Img from './Img.jsx'
import { img, IMAGES } from '../utils/images.js'
import { waLink, GENERAL_MSG } from '../utils/whatsapp.js'
import { BUSINESS } from '../config/business.js'
const trust = [
  [FiStar, `${BUSINESS.rating}/5 Google rating`, `${BUSINESS.reviewCount} Google reviews`],
  [FiUsers, 'Professional guidance', 'Travel and visa-related inquiries'],
  [FiCheckCircle, 'Customer-focused', 'Assistance tailored to you'],
  [FiMessageCircle, 'Clear communication', 'Support when you have questions'],
]
export default function Hero() {
  return (
    <>
      <section id="home" className="relative isolate flex min-h-[92vh] items-center">
        <Img eager src={img(IMAGES.hero, 1800)} alt="Airplane wing above the clouds at sunrise" className="absolute inset-0 -z-10 h-full w-full" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/90 via-navy/65 to-navy/30" />
        <div className="mx-auto w-full max-w-7xl px-5 pt-24 pb-16">
          <div className="rise max-w-2xl text-white">
            <span className="inline-block rounded-full border border-gold/60 bg-navy/40 px-4 py-1 text-xs font-semibold tracking-wider text-gold uppercase">Your Travel Journey, Our Priority</span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Your Journey Begins with Shaandaar Travels</h1>
            <p className="mt-5 text-lg text-white/85">Explore the world with personalized travel guidance, visa assistance, and travel solutions designed around your journey.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-gold">Plan Your Trip</a>
              <a href="#services" className="btn btn-ghost">Explore Our Services</a>
              <a href={waLink(GENERAL_MSG)} target="_blank" rel="noopener noreferrer" className="btn btn-wa"><FaWhatsapp /> WhatsApp Us</a>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-white/90"><FaStar className="text-gold" aria-hidden /> Rated {BUSINESS.rating}/5 on Google • {BUSINESS.reviewCount} Customer Reviews</p>
          </div>
        </div>
      </section>
      <section aria-label="Why customers trust us" className="relative z-10 mx-auto -mt-10 max-w-7xl px-5">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map(([Icon, t, s]) => (
            <li key={t} className="card flex items-center gap-4 p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy text-xl text-gold"><Icon aria-hidden /></span>
              <div><p className="font-semibold">{t}</p><p className="text-sm text-slate-600">{s}</p></div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
