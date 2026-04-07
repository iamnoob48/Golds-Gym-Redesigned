import NavBar from './ComponentsLanding/nav-bar'
import HeroSection from './ComponentsLanding/hero-section'
import PreSaleSection from './ComponentsLanding/pre-sale'
import ProgramsSection from './ComponentsLanding/programs-section'
import GGFISection from './ComponentsLanding/ggfi-section'
import WhatMakesDifferent from './ComponentsLanding/what-makes-different'
import TestimonialWall from './ComponentsLanding/testimonials'
import ContactPage from './ComponentsLanding/contact-us'
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
