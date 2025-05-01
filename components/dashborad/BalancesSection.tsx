'use client';
import { FaArrowCircleUp } from 'react-icons/fa';


import { BsThreeDotsVertical } from 'react-icons/bs';

export default function BalancesSection() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 border">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900">Your Balances</h2>
        <p className="text-sm text-gray-500">Manage your balances across different currencies</p>
        <button className="mt-3 px-4 py-1 text-sm font-medium text-white bg-black rounded hover:bg-gray-800">
          View All
        </button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-4 items-center bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-700">
          <div>Currency</div>
          <div>Balance</div>
          <div>Last Updated</div>
          <div className="text-right">Actions</div>
        </div>

        {/* Row 1 - USD */}
        <div className="grid grid-cols-4 items-center px-4 py-4 border-t">
          <div className="flex items-center space-x-2">
            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full font-semibold text-gray-700">USD</span>
            <span className="font-medium text-gray-900">US Dollar</span>
          </div>
          <div className="font-semibold text-gray-800">$5,240.00</div>
          <div className="text-gray-500 text-sm">Jun 1, 2023</div>
          <div className="flex justify-end items-center space-x-3">
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100">
              <FaArrowCircleUp className="text-green-600" />
              Top Up
            </button>
            <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Row 2 - EUR */}
        <div className="grid grid-cols-4 items-center px-4 py-4 border-t">
          <div className="flex items-center space-x-2">
            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full font-semibold text-gray-700">EUR</span>
            <span className="font-medium text-gray-900">Euro</span>
          </div>
          <div className="font-semibold text-gray-800">€3,180.50</div>
          <div className="text-gray-500 text-sm">May 28, 2023</div>
          <div className="flex justify-end items-center space-x-3">
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100">
              <FaArrowCircleUp className="text-green-600" />
              Top Up
            </button>
            <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Row 3 - GBP */}
        <div className="grid grid-cols-4 items-center px-4 py-4 border-t">
          <div className="flex items-center space-x-2">
            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full font-semibold text-gray-700">GBP</span>
            <span className="font-medium text-gray-900">British Pound</span>
          </div>
          <div className="font-semibold text-gray-800">£2,750.25</div>
          <div className="text-gray-500 text-sm">May 25, 2023</div>
          <div className="flex justify-end items-center space-x-3">
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100">
              <FaArrowCircleUp className="text-green-600" />
              Top Up
            </button>
            <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Row 4 - JPY */}
        <div className="grid grid-cols-4 items-center px-4 py-4 border-t">
          <div className="flex items-center space-x-2">
            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full font-semibold text-gray-700">JPY</span>
            <span className="font-medium text-gray-900">Japanese Yen</span>
          </div>
          <div className="font-semibold text-gray-800">¥210,450.75</div>
          <div className="text-gray-500 text-sm">May 20, 2023</div>
          <div className="flex justify-end items-center space-x-3">
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100">
              <FaArrowCircleUp className="text-green-600" />
              Top Up
            </button>
            <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
