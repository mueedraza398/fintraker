'use client';

import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Create an Account',
    description: 'Sign up in less than 2 minutes with just your email and password',
  },
  {
    number: 2,
    title: 'Add Your First Balance',
    description: 'Create a balance in your preferred currency',
  },
  {
    number: 3,
    title: 'Start Making Transfers',
    description: 'Send money to anyone, anywhere, in any supported currency',
  },
];

export default function GetStartedSteps() {
  return (
    <section className="my-24 px-44">
      <div className="rounded-xl overflow-hidden border border-emerald-300">
        <div className="bg-emerald-600 text-white px-6 py-4">
          <h2 className="text-lg md:text-xl font-semibold">Start Using FinTrack Today</h2>
          <p className="text-sm opacity-90">
            Join thousands of users who trust FinTrack for their multi-currency needs
          </p>
        </div>

        <div className="bg-gradient-to-b from-green-50 to-white px-6 py-6 space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-emerald-100 text-emerald-700 font-semibold px-2 py-1 text-sm rounded-full">
                    {step.number}
                  </span>
                  <h3 className="font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

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
