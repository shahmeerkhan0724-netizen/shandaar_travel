import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import VisaServices from './components/VisaServices.jsx'
import TravelPackages from './components/TravelPackages.jsx'
import ReviewSection from './components/ReviewSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <VisaServices />
        <TravelPackages />
        <ReviewSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
