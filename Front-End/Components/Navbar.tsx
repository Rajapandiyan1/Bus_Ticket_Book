import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
  <div className="container mx-auto flex justify-between items-center">
    <a href="#" className="text-white text-lg font-bold">Logo</a>
    
    <button className="block lg:hidden text-white focus:outline-none">
      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
    
    <ul className="hidden lg:flex lg:space-x-4">
      <li><Link href="/Book" className="text-white">Booking</Link></li>
      <li><Link href="/My Book" className="text-white">My Booking </Link></li>
    </ul>
  </div>
</nav>

  )
}

export default Navbar