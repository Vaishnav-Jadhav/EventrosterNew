import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { VenueSection } from './components/VenuSection'
import { CategoriesSection } from './components/CategoriesSection'
import { FeaturesSection } from './components/FeaturesSection'
import { StoriesSection } from './components/StoriesSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div>
      <h2>
        <Header/>
        <Hero/>
        <VenueSection/>
        <CategoriesSection/>
        <FeaturesSection/>
        <StoriesSection/>
        <Footer/>
      </h2>
    </div>
  )
}

export default App