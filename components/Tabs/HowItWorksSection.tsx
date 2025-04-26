"use client";

import {
  Users,
  DollarSign,
  CirclePlus,
  RefreshCw,
  BarChart3,
} from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    { label: "Create Account", icon: Users },
    { label: "Add Balances", icon: DollarSign },
    { label: "Top Up", icon: CirclePlus },
    { label: "Transfer", icon: RefreshCw },
    { label: "Track & Manage", icon: BarChart3 },
  ];

  return (
    <section className="w-full py-16 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold">How It All Works Together</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          FinTrack brings together all the essential features for secure and efficient financial management across currencies.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto mt-16 px-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-dashed border-emerald-300 dark:border-emerald-800" />
        </div>

        <div className="relative flex justify-between flex-wrap sm:flex-nowrap gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center min-w-[60px] mx-auto">
                <div className="z-10 rounded-full bg-emerald-600 text-white p-3">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="mt-2 text-sm font-medium">{step.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
