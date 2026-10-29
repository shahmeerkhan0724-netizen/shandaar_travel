import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Img from './Img.jsx'
import { packages } from '../data/packages.js'
import { img } from '../utils/images.js'
import { waLink, packageMsg } from '../utils/whatsapp.js'
export function PackageCard({ p }) {
  const [open, setOpen] = useState(false)
  return (
    <article className="card overflow-hidden">
      <div className="relative h-52">
        <Img src={img(p.image)} alt={p.alt} className="h-full w-full" />
        <span className="absolute left-3 top-3 rounded-full bg-navy/80 px-3 py-1 text-xs font-medium text-gold">Demo content</span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold">{p.destination}</h3>
        <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
        <p className="mt-3 text-sm text-slate-500">{p.duration}</p>
        <p className="font-semibold text-royal">{p.price}</p>
        {open && <p className="mt-3 rounded-lg bg-mist p-3 text-sm text-slate-600">Itinerary, inclusions, dates and availability have not been confirmed. Contact the team for current details.</p>}
        <div className="mt-5 flex gap-2">
          <button className="btn btn-outline flex-1 !text-sm" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Hide Details' : 'View Details'}</button>
          <a href={waLink(packageMsg(p.destination))} target="_blank" rel="noopener noreferrer" className="btn btn-wa flex-1 !text-sm"><FaWhatsapp /> Enquire Now</a>
        </div>
      </div>
    </article>
  )
}
export default function TravelPackages() {
  return (
    <section id="packages" className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <p className="eyebrow">Travel Packages</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Discover Your Next Destination</h2>
        <p className="mt-3 max-w-2xl text-slate-600">Sample destination cards. Package details and availability are subject to confirmation.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{packages.map((p) => <PackageCard key={p.destination} p={p} />)}</div>
      </div>
    </section>
  )
}
