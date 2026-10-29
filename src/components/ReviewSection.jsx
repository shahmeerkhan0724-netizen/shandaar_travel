import { useRef } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi'
import { reviews } from '../data/reviews.js'
import { BUSINESS } from '../config/business.js'
export default function ReviewSection() {
  const track = useRef(null)
  const scroll = (dir) => track.current?.scrollBy({ left: dir * (track.current.firstChild.offsetWidth + 24), behavior: 'smooth' })
  return (
    <section id="reviews" className="bg-navy py-20 text-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow !text-gold">Customer Reviews</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">What Our Customers Say</h2>
            <div className="mt-4 flex items-center gap-3">
              <span className="font-display text-5xl font-bold text-gold">{BUSINESS.rating}/5</span>
              <div><div className="flex text-gold" aria-hidden>{[...Array(5)].map((_, i) => <FaStar key={i} />)}</div><p className="text-sm text-white/80">on Google • Based on {BUSINESS.reviewCount} reviews</p></div>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => scroll(-1)} aria-label="Previous reviews" className="grid h-11 w-11 place-items-center rounded-full border border-white/40 text-xl hover:bg-white/10"><FiChevronLeft /></button>
            <button onClick={() => scroll(1)} aria-label="Next reviews" className="grid h-11 w-11 place-items-center rounded-full border border-white/40 text-xl hover:bg-white/10"><FiChevronRight /></button>
          </div>
        </div>
        <ul ref={track} className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4" tabIndex={0} aria-label="Customer reviews">
          {reviews.map((r) => (
            <li key={r.name} className="w-[85%] shrink-0 snap-start rounded-2xl bg-white p-6 text-navy sm:w-[46%] lg:w-[31.5%]">
              <div className="flex text-gold" role="img" aria-label={`${r.rating} out of 5 stars`}>{[...Array(r.rating)].map((_, i) => <FaStar key={i} />)}</div>
              <blockquote className="mt-3 text-slate-700">“{r.text}”</blockquote>
              <p className="mt-4 font-semibold">{r.name}</p>
              <p className="text-xs text-slate-500">Google review{r.excerpt ? ' (excerpt)' : ''}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">Read reviews on Google <FiExternalLink /></a>
          <p className="text-xs text-white/60">Reviews shown are supplied excerpts and are not live-synced with Google.</p>
        </div>
      </div>
    </section>
  )
}
