import { FaWhatsapp } from 'react-icons/fa'
import { waLink, GENERAL_MSG } from '../utils/whatsapp.js'
export default function WhatsAppButton() {
  return (
    <a href={waLink(GENERAL_MSG)} target="_blank" rel="noopener noreferrer" aria-label="Chat with Shaandaar Travels on WhatsApp"
      className="fixed bottom-4 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#128C4A] text-3xl text-white shadow-xl transition hover:scale-105">
      <FaWhatsapp aria-hidden />
    </a>
  )
}
