import { useState } from 'react'
export default function Img({ src, alt, className = '', eager = false }) {
  const [bad, setBad] = useState(false)
  if (bad) return <div role="img" aria-label={alt} className={`${className} bg-gradient-to-br from-navy to-royal`} />
  return <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} onError={() => setBad(true)} className={`${className} object-cover`} />
}
