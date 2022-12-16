import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BaseUrlImages, file_size } from '../../utils/getData';
import getSearchData from '../../utils/getSearchData';

function Search() {
  let params = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
    function getData() {
      getSearchData.getSearchMovies(params.query).then(json => {
        setData(json.data.results)
      })
    }

  }, [params.query])

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-4">
            <h3>Search Results</h3>
            <h4>Movies</h4>
            <h4>TV Shows</h4>
            <h4>People</h4>
            <h4>Collections</h4>
          </div>
          <div className="col-8">
            {
              (data.length > 0) && data.map((item, index) => {
                console.log("buitem", item);
                return (
                  <div key={index} className="d-flex m-3">
                    <img className='image' style={{ width: "100px" }} src={BaseUrlImages + file_size + item.poster_path} alt="" />
                    <div className='m-2'>
                      <h4>{item.title}</h4>
                      <p>{item.release_date}</p>
                      <p>{item.overview}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Search