import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BaseUrlImages, file_size } from '../../utils/getData';
import getPopularPeople from '../../utils/getPopularPeople';
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

//  https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/person/11?api_key=51cc7f5f459038d8f6fd27150449d6a1&language=en-US


function PeopleDetail() {
  const params = useParams()
  console.log(params);
  const [detailPeople, setDetailPeople] = useState([])

  useEffect(() => {
    getData()
    function getData() {
      getPopularPeople.getPeopleDetail(params.id).then(json => {
        setDetailPeople(json.data)
      })
    }
  }, [params])

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4 mt-5 mb-5">
            <img 
            style={{width: "300px", borderRadius: "15px"}} 
            src={BaseUrlImages + file_size + detailPeople.profile_path} alt="" />
            <div className='mb-3'>
              <span style={{fontSize: "30px", margin: "5px"}}><FaFacebookF/></span>
              <span style={{fontSize: "30px", margin: "5px"}}><AiOutlineTwitter/></span>
              <span style={{fontSize: "30px", margin: "5px"}}><BsInstagram/></span>
            </div>
            <h3>Personal Info</h3>
            <h4>Known for</h4>
            <p>{detailPeople.known_for_department}</p>
            <h4>Birthday</h4>
            <p>{detailPeople.birthday}</p>
            <h4>Place of Birth</h4>
            <p>{detailPeople.place_of_birth}</p>
            <h4>Also Known As</h4>
            <p>{detailPeople.also_known_as}</p>
              <button className='btn btn-success'>Edit page</button>
          </div>
          <div className="col-8 mt-5 mb-5">
            <h2>{detailPeople.name}</h2>
            <br />
            <h3>Biography</h3>
            <p>{detailPeople.biography}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeopleDetail

