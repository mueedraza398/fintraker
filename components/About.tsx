import React from 'react'
import Navbar from './Navbar'
import { FaArrowRight } from 'react-icons/fa'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CiGlobe } from "react-icons/ci";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosCode } from "react-icons/io";
import { FiServer } from "react-icons/fi";
import FinTrackOverview from "./Tabs/FinTrackOverview"
import HowItWorksSection from "./Tabs/HowItWorksSection";
import Testimonials from './Tabs/Testimonials';
import FeatureTab from "./Tabs/FeatureTab";
import GetStartedSteps from './Tabs/GetStartedSteps';
import ApplicationComponents from './Tabs/ApplicationComponents';
import TechnologiesSection from './Tabs/TechnologiesSection';
import Footer from './Footer';







function About() {
  return (
    <div>
      <Navbar />


      <section className='class="relative py-20 overflow-hidden '>

        <div className='absolute inset-0 '>
          <div className='absolute bg-emerald-200 inset-0 opacity-30 '></div>
          <div className='absolute right-0 top-1/3 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-20'></div>
          <div className='absolute left-0 bottom-1/3 w-80 h-80 bg-emerald-200 rounded-full blur-3xl opacity-20'></div>
        </div>
        <div className='container relative z-10 px-4 md:px-6 max-w-5xl mx-auto text-center space-y-8'>
          <div className='inline-flex items-center border font-semibold border-transparent hover:bg-primary/80 px-4 py-2 text-sm rounded-full mb-4 bg-emerald-100 text-emerald-700'>Simple • Secure • Multi-Currency</div>
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
      <div className='mt-12' >

        <Tabs defaultValue="account" className="w-full">
          <div className='flex w-full justify-center'>
            <TabsList className='w-3/4' >
              <TabsTrigger value="account">
                <div className='text-black'>
                  <div className='flex flex-col items-center'><CiGlobe />
                    <p >Overview</p>
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="password">
                <div>
                  <div className='flex flex-col items-center'><FaRegCircleCheck />

                    <p >Key Features</p>
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="Name">
                <div>
                  <div className='flex flex-col items-center'><IoIosCode />

                    <p >Component</p>
                  </div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="Tech-Stack">
                <div>
                  <div className='flex flex-col items-center'><FiServer />

                    <p >Tech Stack</p>
                  </div>
                </div>
              </TabsTrigger>

            </TabsList>
          </div>
          <TabsContent value="account">
  

           <FinTrackOverview/>
           <HowItWorksSection />
           <Testimonials/>
           
          </TabsContent>
          <TabsContent value="password">
            <FeatureTab/>
            <GetStartedSteps/>
          </TabsContent>
          <TabsContent value="Name">
          <ApplicationComponents/>
          </TabsContent>
          <TabsContent value="Tech-Stack">
          <TechnologiesSection />
          </TabsContent>

        </Tabs>

      </div>
      <Footer/>

    </div>
  )
}

export default About