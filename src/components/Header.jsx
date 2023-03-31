import React, { useState } from 'react'
import logo from '../assets/shared/logo.svg'
import {BiMenu} from 'react-icons/bi'
import {FaTimes} from 'react-icons/fa'

const Header = () => {

  const [setMenu, hideMenu] = useState(false)

  const showMenu = () => {
    hideMenu(!setMenu)
  }
    const menu = [
        {
            id: 1,
            name: 'Home',
            num: '00',
            path: '#home'
        },
        {
            id: 2,
            name: 'Destination',
            num: '01',
            path: '#destination'
        },
        {
            id: 3,
            name: 'Crew',
            num: '02',
            path: '#crew'
        },
        {
            id: 4,
            name: 'Technology',
            num: '03',
            path: '#tech'
        },
    ]
    const [isActive, setIsActive] = useState(JSON.parse(localStorage.getItem('activeLink')))

    const menuActive = (menuid) => {
        setIsActive(menuid)
        localStorage.setItem('activeLink', menuid)
    }

  
  return (
    <div className='heading'>
        <div className="logo">
        <img src={logo} alt="logo" />
        </div>
      <ul className={`showul ${!setMenu ? 'hideul' : ''}`}>
       {
        menu.map((menu) => (
            <li 
            key={menu.id} className={`${isActive === menu.id ? 'active' : ''}`}><a onClick={() => menuActive(menu.id)} href={menu.path}><span>{menu.num}</span><span>{menu.name}</span></a></li>
        ))
       }
        
      </ul>
      <div className="menu"
      onClick={showMenu}
      >
       {
        !setMenu ?  <BiMenu /> : <FaTimes />
       }
      </div>
    </div>
  )
}

export default Header
