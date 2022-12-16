import React from 'react'
import './header.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import { BiPlusMedical } from 'react-icons/bi'
import { AiFillBell } from 'react-icons/ai'
import { BsPersonFill, BsSearch } from 'react-icons/bs'

function Header() {
    return (
        <div>
            <div className="header d-flex justify-content-around align-items-center">
                <div className='mt-3'>
                <ul>
                    <li><img className='logo' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" /></li>
                    {
                        (MenuItems.length > 0) && MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Dropdown >
                                        <Dropdown.Toggle  variant="none">
                                            <h5>{item.name}</h5>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu >
                                            {
                                                (item.menu2.length > 0) && item.menu2.map((i, k) => {
                                                    return (
                                                        <Dropdown.Item key={k}><Link className='link' to={`${item.link}${i.path}`}>{i.title}</Link></Dropdown.Item>
                                                    )
                                                })
                                            }
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            )
                        })
                    }
                </ul>
                </div>
                <ul className='ulmenu'>
                    <li><BiPlusMedical/></li>
                    <li><button>EN</button></li>
                    <li><AiFillBell/></li>
                    <li><BsPersonFill/></li>
                    <li><BsSearch/></li>
                </ul>
            </div>
        </div>
    )
}

export default Header