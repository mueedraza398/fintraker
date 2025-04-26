'use client';

import {
  ShieldCheck,
  DollarSign,
  RefreshCw,
  LineChart,
  CirclePlus,
  Users,
} from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
    title: 'Secure Authentication',
    description:
      'JWT-based authentication with email verification and password reset functionality. Two-factor authentication for enhanced security and configurable session timeouts to protect user accounts.',
  },
  {
    icon: <DollarSign className="h-6 w-6 text-emerald-600" />,
    title: 'Multi-Currency Support',
    description:
      'Create and manage balances in different currencies including USD, EUR, GBP, JPY, and more. Real-time currency conversion based on up-to-date exchange rates.',
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-emerald-600" />,
    title: 'Easy Transfers',
    description:
      'Transfer money to other users with automatic currency conversion. Save frequent recipients as contacts for faster transfers. View detailed transaction history with filtering options.',
  },
  {
    icon: <LineChart className="h-6 w-6 text-emerald-600" />,
    title: 'Currency Tracking',
    description:
      'Monitor real-time currency exchange rates with historical data visualization. Currency converter tool for planning transfers and understanding market movements.',
  },
  {
    icon: <CirclePlus className="h-6 w-6 text-emerald-600" />,
    title: 'Top Up & Withdraw',
    description:
      'Add funds to your account using multiple payment methods including credit/debit cards and bank transfers. Withdraw funds to your linked accounts with minimal fees.',
  },
  {
    icon: <Users className="h-6 w-6 text-emerald-600" />,
    title: 'Contact Management',
    description:
      'Maintain a list of contacts for quick transfers. Mark favorites for faster access and view transaction history with each contact. Add, edit, and delete contacts as needed.',
  },
];

export default function FeatureTab() {
  return (
    <section className="my-24 px-24">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <div
            key={i}
            className="border rounded-lg p-6 bg-green-50 hover:shadow-sm transition"
          >
            <div className="mb-3 bg-emerald-100 w-fit p-2 rounded-full">
              {feature.icon}
            </div>
            <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
