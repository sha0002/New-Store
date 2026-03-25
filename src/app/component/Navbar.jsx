"use client"
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useCart } from '../utilis/useCart'

const Navbar = () => {
  const {cartCount} = useCart()
  return (
    <nav className='flex justify-between p-4 bg-slate-300'>
      <Link href={"/"} className='text-red-500 text-3xl' >Dev Shop</Link>

      <div className="hidden md:flex space-x-8">
        <Link href="/" className="text-orange-700 text-3xl hover:text-red-600 transition">
          Home
        </Link>
        <Link href="/products" className="text-orange-700 text-3xl hover:text-red-600 transition">
          Products
        </Link>
        {/* <Link href="/products/shirts" className="text-orange-700 text-3xl hover:text-red-600 transition">
          Shirts
        </Link> */}
        {/* <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link> */}
      </div>

      <Link href={"/cart"} className='text-orange-500 hover:text-red-500 inline-block text-xl  cursor-pointer pe-4'>
        <ShoppingCartIcon className='inline-block text-sm w-7 h-7 pr-2' />
         Cart <span>({cartCount})</span>
      </Link>

    </nav>


  )
}

export default Navbar