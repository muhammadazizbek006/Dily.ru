import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// imgs
import katalog from '../assets/nav/katalog.svg'
import reklamalar from '../assets/nav/reklama.svg'
import dokonlar from '../assets/nav/dokonlar.svg'
import xayriya from '../assets/nav/xayriya.svg'
import search from '../assets/nav/search.svg'
import elon from '../assets/nav/elon.svg'

const Nav = () => {
  return (
    <div className='bg-bg-nav py-2.5'>
        <div className="containerb flex justify-between">
            {/* left */}
            <div className='flex'>

              {/* katalog btn */}
              <button className='mr-10'>
                <img src={katalog} alt="katalog" />  
              </button>  
              {/* nav */}
              <ul className='flex items-center space-x-10'>
                <li>
                    <NavLink className='flex items-center mr-2.5'>
                        <img className='mr-2.5' src={reklamalar} alt="reklamalar" />
                        <p className='text-sm font-medium text-nav'>Объявления</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex items-center mr-2.5'>
                        <img className='mr-2.5' src={dokonlar} alt="dokonlar" />
                        <p className='text-sm font-medium text-nav'>Магазины</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex items-center mr-2.5'>
                        <img className='mr-2.5' src={xayriya} alt="xayriya" />
                        <p className='text-sm font-medium text-nav'>Благотворительность</p>
                    </NavLink>
                </li>
              </ul>

            </div>
            {/* right */}
            <div className='flex'>
                <form className='relative flex items-center mr-[72px]' action="">
                    <img className='absolute top-2.5 left-2  ' src={search} alt="search" />
                    <input className='w-[230px] h-7 rounded-s-xl pl-6'  type="search"  placeholder='Я хочу купить'/>
                    <button className='bg-nayti text-sm text-nav h-7 px-7 rounded-e-xl'>Найти</button>
                </form>
                {/* e'lon qo'ying */}
                <Link className='bg-yashil w-[213px] px-6  rounded-2xl flex  items-center '>
                    <p className='text-sm text-white mr-4'>Подать объявление</p>
                    <img src={elon} alt="e'lon" />
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Nav