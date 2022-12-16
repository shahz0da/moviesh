import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BaseUrlImages, file_size } from '../../utils/getData'
import getMovies from '../../utils/getMovies'
import './latestTrailers.css'

function LatestTrailers() {

    const [movies, setMovies] = useState([])
    const [photo, setPhoto] = useState('')
    const [active, setActive] = useState("popular")

    function getData(value) {
        getMovies.getMoviesByCategory(value || "popular").then(json => {
            setMovies(json.data.results)
            setPhoto(`${BaseUrlImages + file_size + json.data.results[0].backdrop_path}`)
        })
    }
    useEffect(() => {
        getData()

    }, [])

    return (
        <div className='container latest'>
                <img className='fon' src={photo} alt="" />
            <div className='whatsPopular'>
                <h1 className='text'>Latest Trailers</h1>
                <div className='divClick'>
                    <button value='popular' onClick={(item) => { setActive(item.target.value); getData(item.target.value) }} className={active === 'popular' ? 'click' : 'noclick'}>Streaming</button>
                    <button value='top_rated' onClick={(item) => { setActive(item.target.value); getData(item.target.value) }} className={active === 'top_rated' ? 'click' : 'noclick'}>On TV</button>
                    <button value='now_playing' onClick={(item) => { setActive(item.target.value); getData(item.target.value) }} className={active === 'now_playing' ? 'click' : 'noclick'}>For Rent</button>
                    <button value='upcoming' onClick={(item) => { setActive(item.target.value); getData(item.target.value) }} className={active === 'upcoming' ? 'click' : 'noclick'}>In Theatres</button>
                </div>
            </div>

            <div className='carousel_movies'>
                {
                    (movies.length > 0) ? movies.map((item, index) => {
                        return (
                            <div key={index} className='streaming'>
                                <div>
                                    <Link to={`/movieDetails/${item.id}`} style={{ color: "black", listStyleType: "none", textDecoration: "none" }}>
                                        <img onMouseEnter={() => setPhoto(`${BaseUrlImages + file_size + item.backdrop_path}`)} className='img_streaming' src={BaseUrlImages + file_size + item.poster_path} alt={item.title} />
                                        <h6 className='text'>{item.title}</h6>
                                        <h6 className='text'>{item.release_date}</h6>
                                    </Link>
                                </div>
                            </div>
                        )
                    }) : (
                        <div>
                            <h2>Loading...</h2>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default LatestTrailers