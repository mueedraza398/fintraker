'use client';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaArrowUp } from 'react-icons/fa';

const WithdrawalsHistoryTab = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const matches = (label: string, type: string) => {
    const matchSearch = label.toLowerCase().includes(search.toLowerCase());
    const matchType = filter === 'All' || filter === type;
    return matchSearch && matchType;
  };

  return (
    <div className="p-4 md:p-6">
      {/* Search and Filter */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-full max-w-md">
          <FiSearch className="absolute top-3.5 left-3 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search transactions..."
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <button
          onClick={() => setFilter(filter === 'Withdrawal' ? 'All' : 'Withdrawal')}
          className="ml-4 border px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
        >
          Filter
        </button>
      </div>

      <div className="bg-white rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Withdrawals</h2>
        <p className="text-sm text-gray-500 mb-4">All outgoing funds from your accounts</p>

        {/* Table Header */}
        <div className="grid grid-cols-6 font-semibold text-sm text-gray-600 border-b py-2">
          <div>Transaction</div>
          <div>Date ↓</div>
          <div>Amount</div>
          <div>Type</div>
          <div>Status</div>
          <div>Actions</div>
        </div>

        {/* Row 1 */}
        {matches('ATM withdrawal', 'Withdrawal') && (
          <div className="grid grid-cols-6 py-4 border-b items-center text-sm">
            <div>
              <div className="font-medium">ATM withdrawal</div>
              <div className="text-xs text-gray-500">ID: tx3</div>
            </div>
            <div>
              <div>May 25, 2023, 02:15 PM</div>
            </div>
            <div>
              <div className="font-medium">$800.00</div>
              <div className="text-xs text-gray-500">Fee: $5.00</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-red-100 text-red-500 p-1 rounded-full">
                <FaArrowUp size={10} />
              </span>
              <span>Withdrawal</span>
            </div>
            <div>
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Completed</span>
            </div>
            <div className="text-gray-400">...</div>
          </div>
        )}

        {/* Row 2 */}
        {matches('Online purchase', 'Withdrawal') && (
          <div className="grid grid-cols-6 py-4 border-b items-center text-sm">
            <div>
              <div className="font-medium">Online purchase</div>
              <div className="text-xs text-gray-500">ID: tx6</div>
            </div>
            <div>
              <div>May 10, 2023, 01:30 PM</div>
            </div>
            <div>
              <div className="font-medium">£150.00</div>
              <div className="text-xs text-gray-500">Fee: £0.75</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-red-100 text-red-500 p-1 rounded-full">
                <FaArrowUp size={10} />
              </span>
              <span>Withdrawal</span>
            </div>
            <div>
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Completed</span>
            </div>
            <div className="text-gray-400">...</div>
          </div>
        )}

        {/* Row 3 */}
        {matches('Restaurant payment', 'Withdrawal') && (
          <div className="grid grid-cols-6 py-4 items-center text-sm">
            <div>
              <div className="font-medium">Restaurant payment</div>
              <div className="text-xs text-gray-500">ID: tx9</div>
            </div>
            <div>
              <div>Apr 28, 2023, 08:30 PM</div>
            </div>
            <div>
              <div className="font-medium">¥30,000.00</div>
              <div className="text-xs text-gray-500">Fee: ¥150.00</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-red-100 text-red-500 p-1 rounded-full">
                <FaArrowUp size={10} />
              </span>
              <span>Withdrawal</span>
            </div>
            <div>
              <span className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full">Failed</span>
            </div>
            <div className="text-gray-400">...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WithdrawalsHistoryTab;
