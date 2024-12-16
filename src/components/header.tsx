import Link from 'next/link'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdOutlineShoppingCart } from 'react-icons/md'

function Header(){
  return (
              <div className='hidden md:block bg-white container mx-auto'>
              <ul className='flex flex-row justify-center gap-10 text-gray-700 pt-4'>
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
                <Link className="nav-links" href={"/product"}>Chairs</Link>
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
)        }

export default Header
