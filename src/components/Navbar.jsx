import { useEffect, useState } from 'react'
import { FiMenu, FiX, FiSend } from 'react-icons/fi'
import { BUSINESS } from '../config/business.js'
export const NAV = [['Home', '#home'], ['About Us', '#about'], ['Visa Services', '#services'], ['Travel Packages', '#packages'], ['Customer Reviews', '#reviews'], ['Contact Us', '#contact']]
export function Logo({ light }) {
  return (
    <a href="#home" className="flex items-center gap-2" aria-label={`${BUSINESS.name} home`}>
      <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-navy"><FiSend aria-hidden /></span>
      <span className={`font-display text-lg font-semibold leading-tight ${light ? 'text-white' : 'text-navy'}`}>Shaandaar<span className="block text-[11px] font-sans font-medium tracking-[.2em] uppercase text-gold">Travels &amp; Tours</span></span>
    </a>
  )
}
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    onScroll(); window.addEventListener('scroll', onScroll); window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey) }
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors ${solid || open ? 'bg-navy/95 shadow-lg backdrop-blur' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3" aria-label="Main">
        <Logo light />
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV.map(([l, h]) => <li key={h}><a href={h} className="text-sm font-medium text-white/90 hover:text-gold">{l}</a></li>)}
        </ul>
        <a href="#contact" className="btn btn-gold hidden lg:inline-flex">Plan Your Trip</a>
        <button className="text-2xl text-white lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-white/10 px-5 pb-5 lg:hidden">
          {NAV.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-2.5 text-white/90">{l}</a></li>)}
          <li className="pt-2"><a href="#contact" onClick={() => setOpen(false)} className="btn btn-gold w-full">Plan Your Trip</a></li>
        </ul>
      )}
    </header>
  )
}
