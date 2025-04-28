'use client';

import { ArrowRight } from 'lucide-react';

export default function GetStartedSteps() {
  return (
    <section className="my-24 px-4 md:px-12 lg:px-44">
      <div className="rounded-xl overflow-hidden border border-emerald-300">
        {/* Top Heading */}
        <div className="bg-emerald-600 text-white px-6 py-4">
          <h2 className="text-lg md:text-xl font-semibold">Start Using FinTrack Today</h2>
          <p className="text-sm opacity-90">
            Join thousands of users who trust FinTrack for their multi-currency needs
          </p>
        </div>

        {/* Steps */}
        <div className="bg-gradient-to-b from-green-50 to-white px-6 py-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            
            {/* Step 1 */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-emerald-100 text-emerald-700 font-semibold px-2 py-1 text-sm rounded-full">
                  1
                </span>
                <h3 className="font-semibold">Create an Account</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Sign up in less than 2 minutes with just your email and password
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-emerald-100 text-emerald-700 font-semibold px-2 py-1 text-sm rounded-full">
                  2
                </span>
                <h3 className="font-semibold">Add Your First Balance</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Create a balance in your preferred currency
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-emerald-100 text-emerald-700 font-semibold px-2 py-1 text-sm rounded-full">
                  3
                </span>
                <h3 className="font-semibold">Start Making Transfers</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Send money to anyone, anywhere, in any supported currency
              </p>
            </div>

          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm px-6 py-2 rounded-md flex items-center gap-2">
              Get Started <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
