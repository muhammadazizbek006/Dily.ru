import React from 'react'
import { Products } from '../Data'
// imgs 
import like1 from '../assets/like1.svg'
const Selection = () => {
  return (
    <section>
        <div className="containerb">
            <h2 className='text-3xl font-bold text-nav mb-8'>Подборка для вас</h2>
            <ul className='grid grid-cols-4  gap-x-10 gap-y-20'>
                {
                    Products.map((e)=>{
                        return(
                            <li className='relative flex flex-col justify-between h-full pt-2 w-[214px]  bg-white rounded-md'>
                                <button  className='absolute right-3 top-2'>
                                    <img src={like1} alt="like" />
                                </button>
                                <div className='flex flex-col items-center'>
                                    <img className='' src={e.img} alt="" />
                                </div>
                                <div className='pl-4'>
                                    <h3 className='text-base mb-1  text-nav'>{e.title}</h3>
                                    <p className='text-base font-bold text-yashil'>{e.price}</p>
                                    <span>{e.location}</span>
                                </div>
                                <button className='w-full py-3 bg-yashil text-white font-medium '>Add Product</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default Selection