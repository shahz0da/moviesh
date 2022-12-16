import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './welcome.css'

function Welcome() {
  const [searchValue, setSearchValue] = useState('')
  




  function SearchFun() {

    console.log(searchValue);
  }
  return (
    <div className='container welcome'>
             <div>
                <div className='forP'>
                    <p className='p'>Welcome.</p>
                    <p className='pp'>Millions of movies, TV shows and people to discover. Explore now.</p>
                </div>
                <div className='search'>
                    <input onInput={(e) => {setSearchValue(e.target.value)}} className='input' type="text" placeholder='Search for a movie, tv show, person.....' />
                    <Link className='link' to={`/search/${searchValue}`}><button onClick={SearchFun} className='buttons'>Search</button></Link>
                </div>
            </div>
    </div>
  )
}

export default Welcome