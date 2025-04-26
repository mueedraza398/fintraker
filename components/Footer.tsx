import React from 'react'
import { LuDollarSign } from 'react-icons/lu'

const Footer = () => {
    return (
        <div>
            <div className="border-t bg-emerald-50 dark:bg-gray-950 py-12 md:py-16">
                <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 md:px-6">

                    {/* Logo and Brand Name */}
                    <div className="flex items-center gap-2">
                        <div className='flex items-center gap-2 text-xl'> <div className='text-emerald-700'>< LuDollarSign /></div><p className="text-xl font-bold">FinTrack</p> </div>


                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
                        <a className="text-sm font-medium hover:text-emerald-600 transition-colors" href="/">Home</a>
                        <a className="text-sm font-medium hover:text-emerald-600 transition-colors" href="/about">About</a>
                        <a className="text-sm font-medium hover:text-emerald-600 transition-colors" href="#">Terms of Service</a>
                        <a className="text-sm font-medium hover:text-emerald-600 transition-colors" href="#">Privacy</a>
                        <a className="text-sm font-medium hover:text-emerald-600 transition-colors" href="#">Contact</a>
                    </nav>

                    {/* Footer Text */}
                    <div className="text-center space-y-1">
                        <p className="text-sm text-muted-foreground">© 2025 FinTrack. All rights reserved.</p>
                        <p className="text-xs text-muted-foreground">Secure, Simple, Multi-Currency Finance Management</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer