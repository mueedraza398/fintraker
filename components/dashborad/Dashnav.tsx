import React from 'react'
import { FaRegBell } from 'react-icons/fa'
import { LuDollarSign } from 'react-icons/lu'

const Dashnav = () => {
  return (
    <div>
        <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
                <a className="flex items-center gap-2" href="/dashboard">
                    <p className="text-xl text-emerald-700"><LuDollarSign /></p>
                    <span className="text-xl font-bold">FinTrack</span>
                </a>
            </div>
            <div className="flex items-center gap-4">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10">
                    <FaRegBell />
                </button>
                <button >
                    <p>user</p>
                </button>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Dashnav