import React from 'react'
import { Link } from 'react-router-dom'

const navList = [
    {nombre:'Home',
        to:'/'
    },
    {nombre:'Login',
        to:'/Login'
    },
]

export const Nav = () => {
  return (
    <div className='m-0 p-2 bg-black flex justify-center gap-3'>
        {navList.map((i,index)=><Link key={index} className='border-white bg-black border-2 hover:cursor-pointer ' to={i.to}>{i.nombre}</Link>)}
    </div>
  )
}
