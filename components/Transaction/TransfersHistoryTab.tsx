'use client';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BiTransferAlt } from 'react-icons/bi';

const TransfersHistoryTab = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const matches = (label: string, type: string) => {
    const matchSearch = label.toLowerCase().includes(search.toLowerCase());
    const matchType = filter === 'All' || filter === type;
    return matchSearch && matchType;
  };

  return (
    <div className="p-4 md:p-6">
      {/* Search + Filter */}
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
          onClick={() => setFilter(filter === 'Transfer' ? 'All' : 'Transfer')}
          className="ml-4 border px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
        >
          Filter
        </button>
      </div>

      <div className="bg-white rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Transfers</h2>
        <p className="text-sm text-gray-500 mb-4">All transfers between accounts</p>

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
        {matches('Payment for services', 'Transfer') && (
          <div className="grid grid-cols-6 py-4 border-b items-center text-sm">
            <div>
              <div className="font-medium">Payment for services</div>
              <div className="text-xs text-gray-500">ID: tx2</div>
            </div>
            <div>May 28, 2023, 07:20 PM</div>
            <div>
              <div className="font-medium">€450.00</div>
              <div className="text-xs text-gray-500">Fee: €2.25</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-100 text-blue-500 p-1 rounded-full">
                <BiTransferAlt size={12} />
              </span>
              <span>Transfer</span>
            </div>
            <div>
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Completed</span>
            </div>
            <div className="text-gray-400">...</div>
          </div>
        )}

        {/* Row 2 */}
        {matches('Rent payment', 'Transfer') && (
          <div className="grid grid-cols-6 py-4 border-b items-center text-sm">
            <div>
              <div className="font-medium">Rent payment</div>
              <div className="text-xs text-gray-500">ID: tx4</div>
            </div>
            <div>May 20, 2023, 09:45 PM</div>
            <div>
              <div className="font-medium">£325.00</div>
              <div className="text-xs text-gray-500">Fee: £1.63</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-100 text-blue-500 p-1 rounded-full">
                <BiTransferAlt size={12} />
              </span>
              <span>Transfer</span>
            </div>
            <div>
              <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full">Pending</span>
            </div>
            <div className="text-gray-400">...</div>
          </div>
        )}

        {/* Row 3 */}
        {matches('Family support', 'Transfer') && (
          <div className="grid grid-cols-6 py-4 border-b items-center text-sm">
            <div>
              <div className="font-medium">Family support</div>
              <div className="text-xs text-gray-500">ID: tx7</div>
            </div>
            <div>May 5, 2023, 06:20 PM</div>
            <div>
              <div className="font-medium">$500.00</div>
              <div className="text-xs text-gray-500">Fee: $2.50</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-100 text-blue-500 p-1 rounded-full">
                <BiTransferAlt size={12} />
              </span>
              <span>Transfer</span>
            </div>
            <div>
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Completed</span>
            </div>
            <div className="text-gray-400">...</div>
          </div>
        )}

        {/* Row 4 */}
        {matches('Consulting fee', 'Transfer') && (
          <div className="grid grid-cols-6 py-4 items-center text-sm">
            <div>
              <div className="font-medium">Consulting fee</div>
              <div className="text-xs text-gray-500">ID: tx10</div>
            </div>
            <div>Apr 25, 2023, 03:15 PM</div>
            <div>
              <div className="font-medium">$750.00</div>
              <div className="text-xs text-gray-500">Fee: $3.75</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-100 text-blue-500 p-1 rounded-full">
                <BiTransferAlt size={12} />
              </span>
              <span>Transfer</span>
            </div>
            <div>
              <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Completed</span>
            </div>
            <div className="text-gray-400">...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransfersHistoryTab;
