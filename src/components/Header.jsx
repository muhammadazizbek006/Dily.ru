import React from 'react'
import { Link } from 'react-router-dom'
// imgs
import logo from '../assets/header/logo.svg'
import location from '../assets/header/location.svg'
import kirish from '../assets/header/kirish.svg'
// data
import { locations } from '../Data'
const Header = () => {
  return (
    <header className='py-5'>
      <div className="containerb flex justify-between">
        {/* left */}
        <div className='flex '>
        {/* logo */}
        <Link className='mr-5' to='/'>
          <img src={logo} alt="" />
        </Link>
        {/* nav */}
        <ul className='flex  items-center space-x-10'>
          <li>
            <Link className='text-sm font-bold text-nav'>Доска объявлений</Link>
          </li>
          <li>
            <Link className='text-sm font-bold text-nav'>Сервисный центр</Link>
          </li>
          <li>
            <Link className='text-sm font-bold text-nav'>Интернет-магазин Dily.ru</Link>
          </li>
          <li>
            <Link className='text-sm font-bold text-nav'>Скупка</Link>
          </li>
        </ul>

        </div>
        {/* right */}
        <div className='flex'>
          {/* location */}
          <div className='flex items-center mr-7 '>
            <img className='mr-2.5' src={location} alt="location" />
            <select className='w-[90px]' name="" id="">
              {
                locations.map((e)=>{
                  return(
                    <option className='text-sm font-normal text-nav' value="">{e.location}</option>
                  )
                })
              }
            </select>
          </div>
          {/* kirsh ro'yxatdan o'tish */}
          <button className='flex items-center'>
            <img className='mr-2.5' src={kirish} alt="Вход/ регистрация" />
            <p className='text-sm  text-nav'>Вход/ регистрация</p>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header