import Link from 'next/link'
import React from 'react'
import { LuDollarSign } from 'react-icons/lu'

const Navbar = () => {
  return (
    <div>
       < header>
                <nav className='flex justify-between px-6 py-3 border'>
                    <div className='flex items-center gap-2 text-xl'> <div className='text-emerald-700'>< LuDollarSign /></div><p className="text-xl font-bold">FinTrack</p> </div>
                    <div className='flex flex-row gap-3'>

                        <Link className=" items-center justify-center rounded-md px-4 py-2" href="/login">
                            Login
                        </Link>
                        <Link className="bg-black text-white items-center justify-center gap-2 rounded-md   px-4 py-2" href="/register">
                            Sign Up
                        </Link>

                    </div>

                </nav>
            </header>
    </div>
  )
}

export default Navbar