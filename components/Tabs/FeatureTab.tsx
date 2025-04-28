'use client';

import {
  ShieldCheck,
  DollarSign,
  RefreshCw,
  LineChart,
  CirclePlus,
  Users,
} from 'lucide-react';

export default function FeatureTab() {
  return (
    <section className="my-24 px-4 md:px-12 lg:px-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Feature 1 */}
        <div className="border rounded-lg p-6 bg-green-50 hover:shadow-sm transition">
          <div className="mb-3 bg-emerald-100 w-fit p-2 rounded-full">
            <ShieldCheck className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="font-bold text-lg mb-2">Secure Authentication</h3>
          <p className="text-sm text-muted-foreground">
            JWT-based authentication with email verification and password reset functionality. Two-factor authentication for enhanced security and configurable session timeouts to protect user accounts.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="border rounded-lg p-6 bg-green-50 hover:shadow-sm transition">
          <div className="mb-3 bg-emerald-100 w-fit p-2 rounded-full">
            <DollarSign className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="font-bold text-lg mb-2">Multi-Currency Support</h3>
          <p className="text-sm text-muted-foreground">
            Create and manage balances in different currencies including USD, EUR, GBP, JPY, and more. Real-time currency conversion based on up-to-date exchange rates.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="border rounded-lg p-6 bg-green-50 hover:shadow-sm transition">
          <div className="mb-3 bg-emerald-100 w-fit p-2 rounded-full">
            <RefreshCw className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="font-bold text-lg mb-2">Easy Transfers</h3>
          <p className="text-sm text-muted-foreground">
            Transfer money to other users with automatic currency conversion. Save frequent recipients as contacts for faster transfers. View detailed transaction history with filtering options.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="border rounded-lg p-6 bg-green-50 hover:shadow-sm transition">
          <div className="mb-3 bg-emerald-100 w-fit p-2 rounded-full">
            <LineChart className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="font-bold text-lg mb-2">Currency Tracking</h3>
          <p className="text-sm text-muted-foreground">
            Monitor real-time currency exchange rates with historical data visualization. Currency converter tool for planning transfers and understanding market movements.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="border rounded-lg p-6 bg-green-50 hover:shadow-sm transition">
          <div className="mb-3 bg-emerald-100 w-fit p-2 rounded-full">
            <CirclePlus className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="font-bold text-lg mb-2">Top Up & Withdraw</h3>
          <p className="text-sm text-muted-foreground">
            Add funds to your account using multiple payment methods including credit/debit cards and bank transfers. Withdraw funds to your linked accounts with minimal fees.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="border rounded-lg p-6 bg-green-50 hover:shadow-sm transition">
          <div className="mb-3 bg-emerald-100 w-fit p-2 rounded-full">
            <Users className="h-6 w-6 text-emerald-600" />
          </div>
          <h3 className="font-bold text-lg mb-2">Contact Management</h3>
          <p className="text-sm text-muted-foreground">
            Maintain a list of contacts for quick transfers. Mark favorites for faster access and view transaction history with each contact. Add, edit, and delete contacts as needed.
          </p>
        </div>
      </div>
    </section>
  );
}
