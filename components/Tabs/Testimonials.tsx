'use client';

import { ArrowRight } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="my-8 px-4 md:px-16 lg:px-32">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">What Our Users Say</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {/* Testimonial 1 */}
        <div className="border rounded-lg bg-emerald-50 p-6 flex flex-col justify-between space-y-4">
          <div className="text-emerald-500 text-3xl font-bold">“</div>
          <p className="italic text-muted-foreground">
            FinTrack has completely transformed how I manage my international finances. The currency conversion is seamless.
          </p>
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
              S
            </div>
            <div>
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm text-muted-foreground">Digital Nomad</div>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="border rounded-lg bg-emerald-50 p-6 flex flex-col justify-between space-y-4">
          <div className="text-emerald-500 text-3xl font-bold">“</div>
          <p className="italic text-muted-foreground">
            The best multi-currency platform I've used. Clean interface and robust security give me peace of mind.
          </p>
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
              M
            </div>
            <div>
              <div className="font-semibold">Michael Chen</div>
              <div className="text-sm text-muted-foreground">Small Business Owner</div>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="border rounded-lg bg-emerald-50 p-6 flex flex-col justify-between space-y-4">
          <div className="text-emerald-500 text-3xl font-bold">“</div>
          <p className="italic text-muted-foreground">
            I love how easy it is to transfer money between different currencies. Saves me time and money on every transaction.
          </p>
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
              E
            </div>
            <div>
              <div className="font-semibold">Emma Rodriguez</div>
              <div className="text-sm text-muted-foreground">Frequent Traveler</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-emerald-600 text-white font-medium px-6 py-3 rounded-md hover:bg-emerald-700 transition inline-flex items-center">
          Create Your Account Today
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
