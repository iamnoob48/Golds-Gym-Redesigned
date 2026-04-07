import NavBar from './ComponentsLanding/nav-bar.tsx'
import HeroSection from './ComponentsLanding/hero-section.tsx'
import PreSaleSection from './ComponentsLanding/pre-sale.tsx'
import ProgramsSection from './ComponentsLanding/programs-section.tsx'
import GGFISection from './ComponentsLanding/ggfi-section.tsx'
import WhatMakesDifferent from './ComponentsLanding/what-makes-different.tsx'
import TestimonialWall from './ComponentsLanding/testimonials.tsx'
import ContactPage from './ComponentsLanding/contact-us.tsx'
import './index.css'

function App() {
  return (
    <div className="dark min-h-screen bg-black text-white">
      <NavBar />

      {/* Spacer for fixed navbar */}
      <div className="h-[72px]" />

      <HeroSection />
      <PreSaleSection />
      <WhatMakesDifferent />
      <ProgramsSection />
      <GGFISection />
      <TestimonialWall />
      <ContactPage />

    </div>
  )
}

export default App
