import React from 'react'
// import FreeToWatch from './FreeToWatch'
import LatestTrailers from './LatestTrailers'
import Trending from './Trending'
import Welcome from './Welcome'
import WhatsPopular from './WhatsPopular'

function Home() {
  return (
    <div>
        <Welcome/>
        <WhatsPopular/>
        {/* <FreeToWatch/> */}
        <LatestTrailers />
        <Trending/>
    </div>
  )
}

export default Home