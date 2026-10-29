import { FaWhatsapp } from 'react-icons/fa'
import { services } from '../data/services.js'
import { waLink, serviceMsg } from '../utils/whatsapp.js'
export default function VisaServices() {
  return (
    <section id="services" className="bg-mist py-20">
      <div className="mx-auto max-w-7xl px-5">
        <p className="eyebrow">Visa Services</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Visa Assistance for Your Next Journey</h2>
        <p className="mt-3 max-w-2xl text-slate-600">We provide application guidance and documentation support. We are not a government authority or embassy representative, and visa decisions rest with the relevant authorities.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, desc, Icon }) => (
            <article key={title} className="card flex flex-col p-6">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-xl text-gold"><Icon aria-hidden /></span>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{desc}</p>
              <a href={waLink(serviceMsg(title))} target="_blank" rel="noopener noreferrer" className="btn btn-wa mt-5 !text-sm"><FaWhatsapp /> Enquire on WhatsApp</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
