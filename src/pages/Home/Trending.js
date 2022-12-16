import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BaseUrlImages, file_size } from '../../utils/getData'
import getMovies from '../../utils/getMovies'
import './whatsPopular.css'

function Trending() {

    const [movies, setMovies] = useState([])

    function getData(value) {
        getMovies.getMoviesByCategory(value || "popular").then(json => {
            setMovies(json.data.results)
            console.log(json.data.results, 'aaaaaaa');
            console.log('salom', value);
        })
    }

    useEffect(() => {
        getData()

    }, [])


    const [active, setActive] = useState("popular")

    return (
        <div className='container '>
            <div className='whatsPopular'>
                <h1>Trending</h1>
                <div className='divClick'>
                    <button value='popular' onClick={(item) => { setActive(item.target.value); getData(item.target.value) }} className={active === "popular" ? "click" : "noclick"}>Today</button>
                    <button value='top_rated' onClick={(item) => { setActive(item.target.value); getData(item.target.value) }} className={active === "top_rated" ? "click" : "noclick"}>This Week</button>
                </div>
            </div>

            <div className='carousel_movies'>
                {
                    (movies.length > 0) ? movies.map((item, index) => {
                        return (
                            <div key={index} className='streaming'>
                                <div>
                                    <Link to={`/movieDetails/${item.id}`} style={{ color: "black", listStyleType: "none", textDecoration: "none" }}>
                                        <img className='img_streaming' src={BaseUrlImages + file_size + item.poster_path} alt={item.title} />
                                        <h6>{item.title}</h6>
                                        <h6>{item.release_date}</h6>
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

export default Trending