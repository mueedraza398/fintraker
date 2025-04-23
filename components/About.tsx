import React from 'react'
import Navbar from './Navbar'
import { FaArrowRight } from 'react-icons/fa'

function About() {
  return (
    <div>
      <Navbar />


      <section className='class="relative py-20 overflow-hidden bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-950"'>

        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute inset-0 opacity-30 bg-[radial-gradient(circle_500px_at_50%_200px,#4ade80,transparent)]'></div>
          <div className='absolute right-0 top-1/3 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-20'></div>
          <div className='absolute left-0 bottom-1/3 w-80 h-80 bg-emerald-200 rounded-full blur-3xl opacity-20'></div>
        </div>
        <div className='container relative z-10 px-4 md:px-6 max-w-5xl mx-auto text-center space-y-8'>
          <div className='inline-flex items-center border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 px-4 py-2 text-sm rounded-full mb-4 dark:bg-emerald-900/50 dark:text-emerald-300 bg-emerald-100 text-emerald-700'>Simple • Secure • Multi-Currency</div>
          <h1 className='text-5xl font-bold tracking-tight md:text-6xl'>Everything You Need to Know About
            <span className='text-emerald-600'>FinTrack</span>
          </h1>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>A comprehensive multi-currency finance management platform that helps you track balances, transfer funds, and monitor currency rates all in one secure application.</p>
        </div>
        <div className='flex justify-center lg:mt-5 gap-3'>
          <button className='bg-emerald-700 px-8 py-3 rounded-md text-white  '>
            <div className='flex items-center gap-2'>
              <span>Get Started </span>
              <FaArrowRight />
            </div>
          </button>
          <button className=' px-8 py-3 rounded-md border '>Login to Dashoard</button>
        </div>
      </section>

      <section className='py-12 bg-white dark:bg-gray-950 border-y'>
        <div className='container px-4 md:px-6 max-w-5xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            <div className='space-y-2'>
              <p className='text-4xl font-bold text-emerald-600'>5+</p>
              <p className='text-sm text-muted-foreground'>Supported Currencies</p>
            </div>
            <div className='space-y-2'>
              <p className='text-4xl font-bold text-emerald-600'>0%</p>
              <p className='text-sm text-muted-foreground'>Transfer Fee</p>
            </div>
            <div className='space-y-2'>
              <p className='text-4xl font-bold text-emerald-600'>24/7</p>
              <p className='text-sm text-muted-foreground'>Available Service</p>
            </div>
            <div className='space-y-2'>
              <p className='text-4xl font-bold text-emerald-600'>100%</p>
              <p className='text-sm text-muted-foreground'>Secure Transactions</p>
            </div>

          </div>
        </div>




      </section>

    </div>
  )
}

export default About