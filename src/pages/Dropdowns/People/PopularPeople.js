import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BaseUrlImages, file_size } from '../../../utils/getData'
import getPopularPeople from '../../../utils/getPopularPeople'
import './popularPeople.css'

function PopularPeople() {
  const [people, setPeople] = useState([])
 

  useEffect(() => {
    getPeople()
    function getPeople() {
      getPopularPeople.getPeople().then(json => {
        setPeople(json.data.results)
        console.log(json);
      })
    }
  }, [])

  return (
    <div>
      <div className='container'>
        <h3 className='mt-2 mb-2'>Popular People</h3>
        <div className="row justify-content-around">
          {
            (people.length > 0) && people.map((item, index) => {
              return (
                <div className="col-2 m-2 " key={index}>
                  <Link className='link22' to={`/peopleDetail/${item.id}`}>
                    <img className='w-100' src={BaseUrlImages + file_size + item.profile_path} alt="" />
                    <p>{item.name}</p>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default PopularPeople