import React from 'react'
// imgs
import katalog from '../assets/nav/katalog.svg'
import reklamalar from '../assets/nav/reklama.svg'
import dokonlar from '../assets/nav/dokonlar.svg'
import xayriya from '../assets/nav/xayriya.svg'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='bg-bg-nav py-2.5'>
        <div className="containerb">
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
            <div>
                
            </div>

        </div>
    </div>
  )
}

export default Nav