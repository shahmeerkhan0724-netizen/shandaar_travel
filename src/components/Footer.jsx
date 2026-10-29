import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { Logo, NAV } from './Navbar.jsx'
import { BUSINESS, SOCIAL } from '../config/business.js'
import { waLink, GENERAL_MSG } from '../utils/whatsapp.js'
import { services } from '../data/services.js'
import { packages } from '../data/packages.js'
export default function Footer() {
  const social = [[SOCIAL.instagram, FaInstagram, 'Instagram'], [SOCIAL.facebook, FaFacebookF, 'Facebook']].filter(([u]) => u)
  return (
    <footer className="bg-navy pt-16 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm">A Karachi-based travel agency offering visa assistance, travel guidance and travel arrangements.</p>
          <a href={waLink(GENERAL_MSG)} target="_blank" rel="noopener noreferrer" className="btn btn-wa mt-4 !text-sm"><FaWhatsapp /> WhatsApp Us</a>
          {social.length > 0 && <div className="mt-4 flex gap-3">{social.map(([u, I, n]) => <a key={n} href={u} target="_blank" rel="noopener noreferrer" aria-label={n} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-gold hover:text-navy"><I /></a>)}</div>}
        </div>
        <nav aria-label="Quick links"><h3 className="font-display text-lg text-white">Quick Links</h3><ul className="mt-3 space-y-2 text-sm">{NAV.map(([l, h]) => <li key={h}><a href={h} className="hover:text-gold">{l}</a></li>)}</ul></nav>
        <div><h3 className="font-display text-lg text-white">Visa Services</h3><ul className="mt-3 space-y-2 text-sm">{services.slice(0, 6).map((s) => <li key={s.title}><a href="#services" className="hover:text-gold">{s.title}</a></li>)}</ul>
          <h3 className="mt-5 font-display text-lg text-white">Destinations</h3><ul className="mt-3 space-y-2 text-sm">{packages.slice(0, 5).map((p) => <li key={p.destination}><a href="#packages" className="hover:text-gold">{p.destination}</a></li>)}</ul></div>
        <div><h3 className="font-display text-lg text-white">Visit Us</h3>
          <address className="mt-3 text-sm not-italic">{BUSINESS.address}</address>
          <p className="mt-3 text-sm"><a href={`tel:${BUSINESS.tel}`} className="hover:text-gold">{BUSINESS.phone}</a></p>
          <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-gold hover:underline">Get Directions</a></div>
      </div>
      <div className="mt-12 border-t border-white/10 px-5 py-6 text-center text-xs">
        <p className="mx-auto max-w-3xl">Visa decisions and appointment availability are determined by the relevant authorities. Travel services and package availability are subject to confirmation.</p>
        <p className="mt-2">© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
