import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BaseUrlImages, file_size } from '../../../utils/getData'
import getMovies from '../../../utils/getMovies'
import Dropdown from 'react-bootstrap/Dropdown';
import './popular.css'

function Popular() {
  let params = useParams()
  console.log(params);

  const [movies, setMovies] = useState([])
  const [url, seturl] = useState('')

  useEffect(() => {
    getData()
    function getData() {
      getMovies.getMoviesByCategory(params.url).then(json => {
        setMovies(json.data.results)
        seturl(params)
        console.log('salom', json, params);
      })
    }

  }, [params])
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className='col-3'>
            <div className='bigbox'>
              <h2 className='url'>{url.url} movies</h2>
              <div className='mt-4'>
                <Dropdown className='m-2 p-2 box '>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">Sort</Dropdown.Toggle>
                  <Dropdown.Menu>Sort Results by
                    <Dropdown.Item href="#/action-1"><button className='btn'>Popularity descending</button> </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='m-2 p-2 box'>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">Filters</Dropdown.Toggle>
                  <Dropdown.Menu>Sort Results by
                    <Dropdown.Item href="#/action-1"><button className='btn'>Popularity descending</button> </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='m-2 p-2 box'>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">Where to watch</Dropdown.Toggle>
                  <Dropdown.Menu>Sort Results by
                    <Dropdown.Item href="#/action-1"><button className='btn'>Popularity descending</button> </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {
                (movies.length > 0) ? movies.map((item, index) => {
                  return (
                    <div className='col-3 mt-3' key={index}>
                      <div className='p-3 movies'>
                        <Link to={`/movieDetails/${item.id}`} style={{color: "black", listStyleType: "none", textDecoration: "none"}}>
                          <img className='w-100 pt-1 movies' src={BaseUrlImages + file_size + item.poster_path} alt={item.title} />
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
        </div>
      </div>
    </div>
  )
}

export default Popular