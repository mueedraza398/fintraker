// components/ApplicationComponents.tsx

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ApplicationComponents = () => {
  return (
    <section className="px-6 md:px-20 lg:px-44 py-12 rounded-xl border bg-white dark:bg-gray-900 shadow-md">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <ArrowLeft className="text-emerald-500" />
        <div>
          <h2 className="text-xl font-semibold">Application Components</h2>
          <p className="text-sm text-muted-foreground">
            Detailed breakdown of each module in FinTrack
          </p>
        </div>
      </div>

      {/* Module Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Authentication Module */}
        <div className="rounded-xl border p-4 bg-emerald-50 dark:bg-emerald-900/10">
          <div className="flex gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900 h-min">
              {/* Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Authentication Module</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                The authentication module handles user registration, login, and password reset functionality. It uses JWT tokens and includes two-factor authentication.
              </p>
              <div className="bg-emerald-100/60 dark:bg-emerald-800/30 p-3 rounded-md">
                <p className="text-xs font-semibold mb-1">Key Files:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-xs font-medium border border-emerald-300 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">login/page.tsx</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-xs font-medium border border-emerald-300 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">register/page.tsx</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-xs font-medium border border-emerald-300 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">reset-password/page.tsx</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard */}
        <div className="rounded-xl border p-4 bg-emerald-50 dark:bg-emerald-900/10">
          <div className="flex gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900 h-min">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 3h18v18H3V3z" strokeWidth="2" />
                <path d="M8 17V9M12 17V5M16 17v-3" strokeWidth="2" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Dashboard</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Overview of user finances, recent transactions, balance visualization charts, and quick access to actions.
              </p>
              <div className="bg-emerald-100/60 dark:bg-emerald-800/30 p-3 rounded-md">
                <p className="text-xs font-semibold mb-1">Key Files:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-xs font-medium border border-emerald-300 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">dashboard/page.tsx</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-xs font-medium border border-emerald-300 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">components/balance-summary.tsx</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-xs font-medium border border-emerald-300 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">components/recent-transactions.tsx</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Balances Management */}
        <div className="rounded-xl border p-4 bg-emerald-50 dark:bg-emerald-900/10">
          <div className="flex gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900 h-min">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 8c-3.333 0-3.333 8 0 8s3.333-8 0-8z" strokeWidth="2" />
                <path d="M6 4h12M6 20h12" strokeWidth="2" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Balances Management</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Create and manage balances across different currencies with transaction history.
              </p>
              <div className="bg-emerald-100/60 dark:bg-emerald-800/30 p-3 rounded-md">
                <p className="text-xs font-semibold mb-1">Key Files:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-xs font-medium border border-emerald-300 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">dashboard/balances/page.tsx</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-xs font-medium border border-emerald-300 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">components/detailed-balances.tsx</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transfers */}
        <div className="rounded-xl border p-4 bg-emerald-50 dark:bg-emerald-900/10">
          <div className="flex gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900 h-min">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 17l6-6-6-6" strokeWidth="2" />
                <path d="M20 17l-6-6 6-6" strokeWidth="2" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Transfers</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Send funds to other users with multi-currency support, conversion, and transaction fee management.
              </p>
              <div className="bg-emerald-100/60 dark:bg-emerald-800/30 p-3 rounded-md">
                <p className="text-xs font-semibold mb-1">Key Files:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white text-xs font-medium border border-emerald-300 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">dashboard/transfer/page.tsx</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Architecture */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium">System Architecture</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend */}
          <div className="border rounded-lg p-4 bg-background">
            <h4 className="font-medium mb-2 text-emerald-700 dark:text-emerald-400">Frontend</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> User Interface Components</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Authentication Handling</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Data Visualization</li>
            </ul>
          </div>

          {/* API Layer */}
          <div className="border rounded-lg p-4 bg-background">
            <h4 className="font-medium mb-2 text-emerald-700 dark:text-emerald-400">API Layer</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> REST Endpoints</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Authentication & Authorization</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Data Validation</li>
            </ul>
          </div>

          {/* Backend Services */}
          <div className="border rounded-lg p-4 bg-background">
            <h4 className="font-medium mb-2 text-emerald-700 dark:text-emerald-400">Backend Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Business Logic</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Database Operations</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> External API Integration</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Interactive Components + Mobile Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Interactive Dashboard */}
        <div>
          <h3 className="text-xl font-bold mb-4">Interactive Components</h3>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="bg-emerald-600 p-4 text-white">
              <h4 className="font-medium">Interactive Dashboard</h4>
            </div>
            <img alt="Dashboard example" src="/placeholder.svg?height=300&width=500" className="w-full h-[300px] object-cover" />
            <div className="p-4">
              <p className="text-sm text-muted-foreground">
                Real-time balance updates, transaction visualizations, and intuitive interface.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Experience */}
        <div>
          <h3 className="text-xl font-bold mb-4">Mobile Experience</h3>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="bg-emerald-600 p-4 text-white">
              <h4 className="font-medium">Responsive Design</h4>
            </div>
            <img alt="Mobile app example" src="/placeholder.svg?height=300&width=500" className="w-full h-[300px] object-cover" />
            <div className="p-4">
              <p className="text-sm text-muted-foreground">
                Works seamlessly across desktop, tablet, and mobile devices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex py-8 justify-center">
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-4 px-6 rounded-md flex items-center gap-2">
          Create Your Account Today
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default ApplicationComponents;
