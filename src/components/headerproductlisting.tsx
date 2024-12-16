import React from 'react'
import Link from 'next/link'
 export const Headerproductlisting = () => {
  return (
    <div>
      <div className='h-[54px] bg-[#2A254B] text-white text-[14px] md:h-[41px] w-full flex justify-center items-center container mx-auto'>
        <p>Free delivery on all orders over £50 with code easter checkout</p>
      </div>
    </div>
  )
}
export const Nav = () => {
  return (
    <div className='h-[80] w-full container mx-auto'>
      <ul className='flex flex-row justify-center gap-10 text-gray-700 pt-4'>
                <h1 className="text-[24] h-[30px] w-[65px]">Avion</h1>
                <li>
                <Link className="nav-links" href={"/product"}>Plant pots</Link>
                </li>
                <li>
                <Link className="nav-links" href={"/"}>Ceramics</Link>
                </li>
                <li>
                <Link className="nav-links" href={"/"}>Tables</Link>
                </li>
                 <li>
                <Link className="nav-links" href={"/"}>Chairs</Link>
                </li>
                <li>
                <Link className="nav-links" href={"/"}>Crockery</Link>
                </li>
                <li>
                <Link className="nav-links" href={"/"}>Tableware</Link>
                </li>
                <li>
                <Link className="nav-links" href={"/"}>Cutlery</Link>
                </li>
            </ul>
      
    </div>
  )
}
