import React from 'react'
import { Hero } from './hero'
import { Services } from './services'
import { Solutions } from './solutions'
import { Our } from './our'

const Home = () => {
  return (
    <div>  
        <Hero/>
        <Services/>
        <Solutions/>
        <Our/>
    </div>
  )
}

export default Home