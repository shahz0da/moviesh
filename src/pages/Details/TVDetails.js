import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BaseUrlImages, file_size } from '../../utils/getData';
import getTVShows from '../../utils/getTVShows';
import './movieDetails.css'


function TVDetails() {
    const [detail, setDetail] = useState([])
    const params = useParams()
    console.log(params, "buparams");

    useEffect(() => {
        getData()
        function getData() {
            getTVShows.getTVDetail(params.id).then(json => {
                console.log('BUDATA111', json.data);
                setDetail(json.data)
            })
        }
    }, [])
    
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

export default TVDetails