import React, { useEffect, useState } from 'react'
import getMovies from '../../utils/getMovies'
import { useParams } from 'react-router-dom'
import './movieDetails.css'
import { BaseUrlImages, file_size } from '../../utils/getData';


function MovieDetails() {
    const [detail, setDetail] = useState([])
    const params = useParams()

    useEffect(() => {
        getData()
        function getData() {
            getMovies.getMoviesDetail((params.id)).then(json => {
                setDetail(json.data)
            })
        }
    }, [params.id])
    
  return (
    <div>
        <div className='mt-4'>
            <img className='background' src={BaseUrlImages + file_size + detail.backdrop_path} alt="" />
            <div className='abs d-flex justify-content-around p-5 ms-5'>
            <img style={{width: "300px", borderRadius: "15px", margin: "10px"}}  src={BaseUrlImages + file_size + detail.poster_path} alt="" />
            <div className='m-5'>
                <h2 className='text'>{detail.original_title}</h2>
                <p className='text'>{detail.release_date}</p>
                <h2 className='text'>Overview</h2>
                <p className='text'>{detail.overview}</p>
               
            </div>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails