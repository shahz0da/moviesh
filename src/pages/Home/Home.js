import React from 'react'
import LatestTrailers from './LatestTrailers'
import Trending from './Trending'
import Welcome from './Welcome'
import WhatsPopular from './WhatsPopular'

function Home() {
  return (
    <div>
        <Welcome/>
        <WhatsPopular/>
        <LatestTrailers />
        <Trending/>
    </div>
  )
}

export default Home