'use client'; // اگر آپ Next.js 13/14 App Router میں ہو تو یہ رکھیں
import React from 'react';

export default function Dashboard() {
  return (
    <div className="bg-gray-50 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-gray-600 mt-2">
            Welcome back! Here's an overview of your finances.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 border-b border-gray-200 pb-2">
          <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md">
            Overview
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-black">
            Balances
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-black">
            Transactions
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">Total Balance (USD)</p>
            <h3 className="text-2xl font-bold mt-2">$12,580.25</h3>
            <p className="text-xs text-green-600 mt-1">+2.5% from last month</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">Active Currencies</p>
            <h3 className="text-2xl font-bold mt-2">4</h3>
            <p className="text-xs text-gray-600 mt-1">USD, EUR, GBP, JPY</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">Monthly Transactions</p>
            <h3 className="text-2xl font-bold mt-2">24</h3>
            <p className="text-xs text-green-600 mt-1">+8 from last month</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">Pending Transfers</p>
            <h3 className="text-2xl font-bold mt-2">2</h3>
            <p className="text-xs text-gray-600 mt-1">$1,250.00 total</p>
          </div>

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Balance Summary Chart (fake chart) */}
          <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Balance Summary</h3>
            <div className="h-64 flex items-end space-x-6">
              
              {/* USD */}
              <div className="flex flex-col items-center flex-1">
                <div className="bg-green-400 w-10 h-40"></div>
                <span className="text-sm mt-2">USD</span>
              </div>

              {/* EUR */}
              <div className="flex flex-col items-center flex-1">
                <div className="bg-green-400 w-10 h-32"></div>
                <span className="text-sm mt-2">EUR</span>
              </div>

              {/* GBP */}
              <div className="flex flex-col items-center flex-1">
                <div className="bg-green-400 w-10 h-28"></div>
                <span className="text-sm mt-2">GBP</span>
              </div>

              {/* JPY */}
              <div className="flex flex-col items-center flex-1">
                <div className="bg-green-400 w-10 h-16"></div>
                <span className="text-sm mt-2">JPY</span>
              </div>

            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>

            {/* Top Up */}
            <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <div className="bg-green-100 p-2 rounded-full">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Top Up</p>
                <p className="text-sm text-gray-500">Add funds to your account</p>
              </div>
            </div>

            {/* Transfer */}
            <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <div className="bg-blue-100 p-2 rounded-full">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.293 9.293a1 1 0 011.414 1.414L10.414 14H17a1 1 0 110 2H9a1 1 0 01-1-1v-8a1 1 0 112 0v6.586l3.293-3.293z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Transfer</p>
                <p className="text-sm text-gray-500">Send money to others</p>
              </div>
            </div>

            {/* Withdraw */}
            <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <div className="bg-orange-100 p-2 rounded-full">
                <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 10V5a3 3 0 016 0v5h1a2 2 0 012 2v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5a2 2 0 012-2h1z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Withdraw</p>
                <p className="text-sm text-gray-500">Withdraw to bank account</p>
              </div>
            </div>

            {/* Transactions */}
            <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <div className="bg-purple-100 p-2 rounded-full">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h3.293a1 1 0 01.707.293l2.707 2.707a1 1 0 010 1.414L8.707 9.707a1 1 0 01-1.414 0L4 6.414A1 1 0 014 4z" />
                  <path d="M3 12a1 1 0 011-1h3.293a1 1 0 01.707.293l2.707 2.707a1 1 0 010 1.414L8.707 17.707a1 1 0 01-1.414 0L4 14.414A1 1 0 014 12z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Transactions</p>
                <p className="text-sm text-gray-500">View your history</p>
              </div>
            </div>

            {/* Currency Rates */}
            <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <div className="bg-indigo-100 p-2 rounded-full">
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 2a1 1 0 011-1h8a1 1 0 011 1v1H5V2zM3 5a1 1 0 011-1h12a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V5z" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Currency Rates</p>
                <p className="text-sm text-gray-500">Check exchange rates</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
