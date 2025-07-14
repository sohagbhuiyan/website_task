
import './App.css'
import BrandValues from './components/BrandValues'
import ContactUs from './components/ContactUs'
import Experience from './components/Experience'
import FeatureSection from './components/FeatureSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import MockUpSection from './components/MockUpSection'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Projects from './components/Projects'
import WhatWeDo from './components/WhatWeDo'

function App() {

  return (
    <>
    <Navbar/>
    <HeroSection />
    <FeatureSection/>
    <Portfolio/>
    <BrandValues/>
    <Projects/>
    <WhatWeDo/>
    <MockUpSection/>
    <Experience/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default App
