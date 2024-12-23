"use client"

import Link from 'next/link'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { SheetSide } from './sheet'

const Topnav = () => {
  return (
    <div className='md: bg-white h-[66px] flex justify-between items-center px-5 container mx-auto border-b-2 '>
        <div className='hidden md:block'>
        <CiSearch/>
        </div>
           <h1 className="w-[65px] h-[30px] text-2xl"><Link className="nav-links" href={"/"}>Avion</Link></h1>
            <div className='hidden md:block'>
            <div className='flex gap-3'>
            <Link className="nav-links" href={"/shoppingbaskets"}><MdOutlineShoppingCart /></Link>
            <FaRegUserCircle/>
            <div>
            </div>
            </div>
            </div>  
            <div className='md:hidden'>
            <div className='flex justify-evenly items-center space-x-2'>
             <CiSearch/>
             <SheetSide/>
             </div>
             </div>
            </div>
  )
}

export default Topnav
