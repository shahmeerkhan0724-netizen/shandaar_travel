import { BUSINESS } from '../config/business.js'
export const waLink = (message) => `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`
export const GENERAL_MSG = 'Assalam-o-Alaikum Shaandaar Travels and Tours. I would like to inquire about your travel services. Please share the details.'
export const serviceMsg = (s) => `Assalam-o-Alaikum Shaandaar Travels and Tours. I would like to inquire about ${s}. Please share the details.`
export const packageMsg = (d) => `Assalam-o-Alaikum Shaandaar Travels and Tours. I am interested in travel to ${d}. Please share the available options and details.`
