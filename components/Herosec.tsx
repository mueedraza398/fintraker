import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { LuDollarSign } from "react-icons/lu";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { LuCreditCard } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa6";
import { FiShield } from "react-icons/fi";
import Link from 'next/link'
import Navbar from './Navbar';







function Herosec() {
    return (
        <div>
            <Navbar/>

            <main className="w-full py-12 md:py-18 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
                <div className="container px-4 md:px-6">
                    <div className=' items-center flex flex-col md:flex-row lg:gap-52'>
                        <div className='space-y-2'>
                            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'> Manage Your  <br />Finances Across <br /> Currencies</h1>
                            <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>Track balances, transfer funds, and monitor currency rates all in one secure platform.</p>
                            <div className='flex gap-3'>
                                <Link className='bg-emerald-700 px-8 py-3 rounded-md text-white  ' href="register">
                                    <div className='flex items-center gap-2'>
                                        <span>Get Started </span>
                                        <FaArrowRight />
                                    </div>
                                </Link>
                                <button className=' px-8 py-3 rounded-md border '>Learn More </button>
                            </div>
                        </div>

                        <div >
                            <div className=' bg-white border px-8 pb-5'>
                                <div className='flex justify-around items-center'>
                                    <h1 className='text-xl font-semibold py-6'>Your Balances </h1>
                                    <p> <HiArrowPathRoundedSquare /> </p>
                                </div>

                                <div className=' w-full flex flex-col gap-3'>


                                    <div className='gap-12 items-center px-3 border rounded-lg bg-gray-100 dark:bg-gray-800 flex '>
                                        <div className='flex justify-between  '>
                                            <div className='flex items-center gap-2 '>
                                                <span className='text-2xl font-bold'>$</span>

                                            </div>
                                            <div className='flex flex-col px-2 py-4'>
                                                <div className='font-medium'>USD</div>
                                                <div>US DOLLAR</div>
                                            </div>
                                        </div>
                                        <div className='font-medium'>54200.00</div>
                                    </div>




                                    <div className='gap-12 items-center px-3 border rounded-lg bg-gray-200 dark:bg-gray-800 flex '>
                                        <div className='flex justify-between  '>
                                            <div className='flex items-center gap-2 '>
                                                <span className='text-2xl font-bold'>€</span>

                                            </div>
                                            <div className='flex flex-col px-2 py-4'>
                                                <div className='font-medium'>EUR</div>
                                                <div>Euro</div>
                                            </div>
                                        </div>
                                        <div className='font-medium lg:ml-16'>3180.50</div>
                                    </div>




                                    <div className='gap-12 items-center p-3 border rounded-lg bg-gray-200 dark:bg-gray-800 flex '>
                                        <div className='flex items-center gap-2 '>

                                            <span className='text-2xl font-bold'>£</span>

                                            <div className=''>
                                                <h1 className='font-medium'>GBP</h1>
                                                <p>British Pound</p>
                                            </div>
                                        </div>
                                        <div className='font-medium'>2,750.25
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </main>

            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                <div className='space-y-2'>
                    <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl md:mt-8'>Key Features</h2>
                    <p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>Everything you need to manage your finances across multiple currencies</p>
                </div>

            </div>

            <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12'>
                <div className='flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm'>
                    <h1 className='text-emerald-600 text-5xl'><FiShield /></h1>
                    <h3 className='text-xl font-bold'> Secure Authentication</h3>
                    <p className='text-center text-gray-500 dark:text-gray-400'>JWT-based authentication with email verification and password reset functionality.</p>
                </div>
                <div className='flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm'>
                    <h1 className='text-emerald-600 text-5xl'>< LuDollarSign />
                    </h1>
                    <h3 className='text-xl font-bold'> Multi-Currency Support </h3>
                    <p className='text-center text-gray-500 dark:text-gray-400'>Maintain balances in different currencies with real-time exchange rates.</p>
                </div>
                <div className='flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm'>
                    <h1 className='text-emerald-600 text-5xl'><HiArrowPathRoundedSquare /></h1>
                    <h3 className='text-xl font-bold'> Easy Transfers    </h3>
                    <p className='text-center text-gray-500 dark:text-gray-400'>Transfer money between users and currencies with minimal fees.</p>
                </div>
                <div className='flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm'>
                    <h1 className='text-emerald-600 text-5xl'><FaChartBar />
                    </h1>
                    <h3 className='text-xl font-bold'>Currency Tracking </h3>
                    <p className='text-center text-gray-500 dark:text-gray-400'>Real-time currency price tracking with historical data visualization.</p>
                </div>
                <div className='flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm'>
                    <h1 className='text-emerald-600 text-5xl'><LuCreditCard />
                    </h1>
                    <h3 className='text-xl font-bold'> Top Up & Withdraw </h3>
                    <p className='text-center text-gray-500 dark:text-gray-400'>Easily add funds to your account or withdraw to external accounts..</p>
                </div>
                <div className='flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm'>
                    <h1 className='text-emerald-600 text-5xl'><FaRegFileAlt /></h1>
                    <h3 className='text-xl font-bold'> Transaction History</h3>
                    <p className='text-center text-gray-500 dark:text-gray-400'>Detailed transaction history with filtering and export capabilities.</p>
                </div>




            </div>


            <footer>
                <div className='flex gap-6 px-14 py-8 border  items-center justify-between'>
                    <div className='md:flex-row md:items-center flex flex-col md:gap-3'>
                        <div className='flex items-center gap-2'> <p className='text-emerald-700 text-xl'>< LuDollarSign /> </p><p className="text-xl font-bold">FinTrack</p> </div>
                        <div className='flex flex-col md:flex-row  md:gap-3'>
                            <div className='text-nowrape'>Term of Services</div>

                            <span>Privacy</span>
                            <span>About</span>

                        </div>

                    </div>
                    <div> <p>© 2023 FinTrack. All rights reserved.</p></div>
                </div>

            </footer>



        </div>
    )
}

export default Herosec