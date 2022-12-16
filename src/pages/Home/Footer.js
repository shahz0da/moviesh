import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { footerAPI } from './MenuItems'


function Footer() {
    return (
        <div className='footer text-center'>
            <div className='d-flex justify-content-around align-items-center w-75 ms-5'>
            <div>
                <img className='footerlogo' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" />
                <button className='btn btn-primary ps-3 pe-3 m-2'>Hi, user!</button>
            </div>
            <div className=' container d-flex  justify-content-between'>
                {
                    (footerAPI.length > 0) && footerAPI.map((item, index) => {
                        return (
                            <ul key={index} className="d-flex flex-column forul">
                                <p>{item.name}</p>
                                     {
                                        (item.nextFooter.length > 0) && item.nextFooter.map((v, i) => {
                                            return (
                                                <li key={i} className='forli'>
                                                    <Link className='forli' to={v.link}>{v.name}</Link>
                                                </li>
                                            )
                                        })
                                     }
                            </ul>
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default Footer