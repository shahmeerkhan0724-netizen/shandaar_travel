import { FiUser, FiMessageSquare, FiHeadphones, FiSmartphone } from 'react-icons/fi'
import Img from './Img.jsx'
import { img, IMAGES } from '../utils/images.js'
import { BUSINESS } from '../config/business.js'
const why = [
  [FiUser, 'Personalized Guidance', 'Travel assistance tailored to your requirements.'],
  [FiMessageSquare, 'Clear Communication', 'Understand the steps and documentation relevant to your inquiry.'],
  [FiHeadphones, 'Responsive Support', 'Contact the team to discuss your travel questions.'],
  [FiSmartphone, 'Convenient Inquiries', 'Connect with the agency through WhatsApp or the website inquiry form.'],
]
export default function AboutSection() {
  return (
    <>
      <section id="about" className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <p className="eyebrow">About Us</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Making Every Journey More Memorable</h2>
            <p className="mt-4 text-slate-600">Shaandaar Travels and Tours is a Karachi-based travel agency focused on helping customers navigate their travel plans with professional guidance and personalized assistance.</p>
            <p className="mt-3 text-slate-600">From visa-related inquiries to travel arrangements, our goal is to make the planning process clearer, more convenient, and more organized.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-gold">Talk to Our Team</a>
              <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">View on Google Maps</a>
            </div>
          </div>
          <Img src={img(IMAGES.about, 1100)} alt="Passport, map and travel essentials (stock photo)" className="h-80 w-full rounded-3xl shadow-xl lg:h-[26rem]" />
        </div>
      </section>
      <section className="bg-mist py-16" aria-label="Why choose us">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-center font-display text-3xl font-bold">Why Choose Us</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map(([Icon, t, d]) => (
              <div key={t} className="card p-6 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-navy text-2xl text-gold"><Icon aria-hidden /></span>
                <h3 className="mt-4 font-display text-lg font-semibold">{t}</h3><p className="mt-2 text-sm text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
