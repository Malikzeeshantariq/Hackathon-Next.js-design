"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { CiMenuBurger } from "react-icons/ci"

const SHEET_SIDES = ["right"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className="bg-white text-black border-0 shadow-sm">
                 <CiMenuBurger/>
            </Button>
          </SheetTrigger>
          <SheetContent side={side} className="mr-5">
            <SheetHeader className="flex justify-start items-start">
              <SheetTitle >Navigatopn Menu</SheetTitle>
              <SheetDescription>
               </SheetDescription>
            </SheetHeader>
            <div >
              <ul>
              <li>
                <Link className="nav-links" href={"/about"}>About us</Link>
                </li>
                <li>
            <Link className="nav-links" href={"/allproducts"}>Contact</Link>
             </li>
            <li>
            <Link className="nav-links" href={"/allproducts"}>Blog</Link>
            </li>
                 <li>
                      <Link className="nav-links" href={"/allproducts"}>All products</Link>
                </li>
                <li>
                <Link className="nav-links" href={"/product"}>Product</Link>
                </li>
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
                <li>
                <Link className="nav-links" href={"/shoppingbaskets"}>Shoppingbaskets</Link>
                </li>
            </ul>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
