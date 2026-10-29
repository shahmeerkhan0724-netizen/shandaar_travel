import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone, FiMapPin, FiNavigation } from 'react-icons/fi'
import { BUSINESS } from '../config/business.js'
import { waLink, GENERAL_MSG } from '../utils/whatsapp.js'
import { services } from '../data/services.js'
// Set VITE_FORM_ENDPOINT (e.g. a Formspree URL) in .env to enable real delivery. Without it the form runs in demo mode.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const empty = { name: '', phone: '', email: '', service: '', destination: '', date: '', message: '' }
const validate = (v) => {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your full name.'
  if (!v.phone.trim()) e.phone = 'Please enter your phone number.'
  else if (!/^\+?[\d\s-]{7,}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number.'
  if (v.email && !/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (!v.service) e.service = 'Please choose a service.'
  if (!v.message.trim()) e.message = 'Please enter a message.'
  return e
}
function Field({ id, label, error, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium">{label}{required ? <span className="text-red-600"> *</span> : <span className="text-slate-500"> (optional)</span>}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1 text-sm text-red-700">{error}</p>}
    </div>
  )
}
const input = 'w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base'
export default function ContactSection() {
  const [v, setV] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const props = (k) => ({ id: k, value: v[k], onChange: set(k), className: input, 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined })
  const submit = async (e) => {
    e.preventDefault()
    const er = validate(v); setErrors(er)
    if (Object.keys(er).length) return
    if (!ENDPOINT) return setStatus('demo')
    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
      if (!res.ok) throw new Error()
      setStatus('success'); setV(empty)
    } catch { setStatus('error') }
  }
  const waDetails = `${GENERAL_MSG}\nName: ${v.name}\nPhone: ${v.phone}\nService: ${v.service}${v.destination ? `\nDestination: ${v.destination}` : ''}${v.date ? `\nTravel date: ${v.date}` : ''}\nMessage: ${v.message}`
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="eyebrow">Contact Us</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Let’s Plan Your Next Journey</h2>
          <p className="mt-4 font-semibold">{BUSINESS.name}</p>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li className="flex gap-3"><FiPhone className="mt-1 shrink-0 text-royal" aria-hidden /><a href={`tel:${BUSINESS.tel}`} className="hover:underline">{BUSINESS.phone}</a></li>
            <li className="flex gap-3"><FiMapPin className="mt-1 shrink-0 text-royal" aria-hidden /><address className="not-italic">{BUSINESS.address}</address></li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`tel:${BUSINESS.tel}`} className="btn btn-outline"><FiPhone /> Call Now</a>
            <a href={waLink(GENERAL_MSG)} target="_blank" rel="noopener noreferrer" className="btn btn-wa"><FaWhatsapp /> WhatsApp</a>
            <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold"><FiNavigation /> Get Directions</a>
          </div>
        </div>
        <form onSubmit={submit} noValidate className="card space-y-4 p-6 lg:col-span-3" aria-label="Inquiry form">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="name" label="Full Name" required error={errors.name}><input {...props('name')} autoComplete="name" /></Field>
            <Field id="phone" label="Phone Number" required error={errors.phone}><input {...props('phone')} type="tel" inputMode="tel" autoComplete="tel" /></Field>
            <Field id="email" label="Email Address" error={errors.email}><input {...props('email')} type="email" autoComplete="email" /></Field>
            <Field id="service" label="Service Interested In" required error={errors.service}>
              <select {...props('service')}><option value="">Select a service</option>{services.map((s) => <option key={s.title}>{s.title}</option>)}<option>Travel Package</option><option>Other</option></select>
            </Field>
            <Field id="destination" label="Destination"><input {...props('destination')} /></Field>
            <Field id="date" label="Travel Date"><input {...props('date')} type="date" /></Field>
          </div>
          <Field id="message" label="Message" required error={errors.message}><textarea {...props('message')} rows={4} /></Field>
          <button type="submit" disabled={status === 'sending'} className="btn btn-gold w-full disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Send Inquiry'}</button>
          <div aria-live="polite">
            {status === 'demo' && (
              <div className="rounded-lg bg-amber-50 p-4 text-sm text-amber-900">
                <p><strong>Demo mode:</strong> no inquiry has been stored or delivered, because no backend is connected yet. To reach the team now, send these details on WhatsApp.</p>
                <a href={waLink(waDetails)} target="_blank" rel="noopener noreferrer" className="btn btn-wa mt-3 !text-sm"><FaWhatsapp /> Send via WhatsApp</a>
              </div>
            )}
            {status === 'success' && <p className="rounded-lg bg-green-50 p-4 text-sm text-green-900">Thank you. Your inquiry was submitted and the team can follow up with you.</p>}
            {status === 'error' && <p className="rounded-lg bg-red-50 p-4 text-sm text-red-800">Your inquiry could not be submitted. Please try again, call us, or use WhatsApp.</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
