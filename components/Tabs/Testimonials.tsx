'use client';

import { ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Digital Nomad',
      quote:
        'FinTrack has completely transformed how I manage my international finances. The currency conversion is seamless.',
      initials: 'S',
    },
    {
      name: 'Michael Chen',
      role: 'Small Business Owner',
      quote:
        "The best multi-currency platform I've used. Clean interface and robust security give me peace of mind.",
      initials: 'M',
    },
    {
      name: 'Emma Rodriguez',
      role: 'Frequent Traveler',
      quote:
        'I love how easy it is to transfer money between different currencies. Saves me time and money on every transaction.',
      initials: 'E',
    },
  ];

  return (
    <section className="my-8 px-32">
      <h2 className="text-2xl font-bold text-center mb-4">What Our Users Say</h2>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="border rounded-lg bg-emerald-50 p-6 flex flex-col justify-between space-y-4"
          >
            <div className="text-emerald-500 text-3xl font-bold">“</div>
            <p className="italic text-muted-foreground">{t.quote}</p>
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                {t.initials}
              </div>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
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
