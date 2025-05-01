'use client';
import { useState } from 'react';
import { FaArrowDown, FaArrowUp, FaExchangeAlt, FaEllipsisV, FaSearch } from 'react-icons/fa';

export default function TransactionHistoryTab() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');


const matches = (label = '', type = '') => {
  const matchSearch = label.toLowerCase().includes(search.toLowerCase());
  const matchType = filter === 'All' || filter === type;
  return matchSearch && matchType;
};


  return (
    <div className="bg-white p-6 rounded-lg shadow border w-full">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div className="relative w-full sm:w-1/2">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="w-full sm:w-auto px-4 py-2 border rounded-md text-sm focus:outline-none"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Deposit">Deposit</option>
          <option value="Transfer">Transfer</option>
          <option value="Withdrawal">Withdrawal</option>
        </select>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-1">Transaction History</h2>
      <p className="text-sm text-gray-500 mb-4">Showing 10 of 10 transactions</p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-2">Transaction</th>
              <th className="py-2">Date</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Type</th>
              <th className="py-2">Status</th>
              <th className="py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {/* Transaction rows below — manually added */}
            {matches('Salary deposit', 'Deposit') && (
              <tr className="border-b">
                <td className="py-3">
                  <div className="font-medium">Salary deposit</div>
                  <div className="text-gray-400 text-xs">ID: tx1</div>
                </td>
                <td className="py-3">Jun 1, 2023, 03:30 PM</td>
                <td className="py-3 font-medium">$1,250.00</td>
                <td className="py-3 flex items-center gap-2">
                  <FaArrowDown className="text-green-600" /> Deposit
                </td>
                <td className="py-3">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Completed</span>
                </td>
                <td className="py-3 text-right"><FaEllipsisV /></td>
              </tr>
            )}

            {matches('Payment for services', 'Transfer') && (
              <tr className="border-b">
                <td className="py-3">
                  <div className="font-medium">Payment for services</div>
                  <div className="text-gray-400 text-xs">ID: tx2</div>
                </td>
                <td className="py-3">May 28, 2023, 07:20 PM</td>
                <td className="py-3 font-medium">€450.00 <div className="text-xs text-gray-400">Fee: €2.25</div></td>
                <td className="py-3 flex items-center gap-2">
                  <FaExchangeAlt className="text-blue-600" /> Transfer
                </td>
                <td className="py-3">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Completed</span>
                </td>
                <td className="py-3 text-right"><FaEllipsisV /></td>
              </tr>
            )}

            {matches('ATM withdrawal', 'Withdrawal') && (
              <tr className="border-b">
                <td className="py-3">
                  <div className="font-medium">ATM withdrawal</div>
                  <div className="text-gray-400 text-xs">ID: tx3</div>
                </td>
                <td className="py-3">May 25, 2023, 02:15 PM</td>
                <td className="py-3 font-medium">$800.00 <div className="text-xs text-gray-400">Fee: $5.00</div></td>
                <td className="py-3 flex items-center gap-2">
                  <FaArrowUp className="text-red-600" /> Withdrawal
                </td>
                <td className="py-3">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Completed</span>
                </td>
                <td className="py-3 text-right"><FaEllipsisV /></td>
              </tr>
            )}

            {matches('Rent payment', 'Transfer') && (
              <tr className="border-b">
                <td className="py-3">
                  <div className="font-medium">Rent payment</div>
                  <div className="text-gray-400 text-xs">ID: tx4</div>
                </td>
                <td className="py-3">May 20, 2023, 09:45 PM</td>
                <td className="py-3 font-medium">£325.00 <div className="text-xs text-gray-400">Fee: £1.05</div></td>
                <td className="py-3 flex items-center gap-2">
                  <FaExchangeAlt className="text-blue-600" /> Transfer
                </td>
                <td className="py-3">
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">Pending</span>
                </td>
                <td className="py-3 text-right"><FaEllipsisV /></td>
              </tr>
            )}

            {matches('Client payment', 'Deposit') && (
              <tr className="border-b">
                <td className="py-3">
                  <div className="font-medium">Client payment</div>
                  <div className="text-gray-400 text-xs">ID: tx5</div>
                </td>
                <td className="py-3">May 15, 2023, 04:10 PM</td>
                <td className="py-3 font-medium">€1,000.00</td>
                <td className="py-3 flex items-center gap-2">
                  <FaArrowDown className="text-green-600" /> Deposit
                </td>
                <td className="py-3">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Completed</span>
                </td>
                <td className="py-3 text-right"><FaEllipsisV /></td>
              </tr>
            )}

            {matches('Online purchase', 'Withdrawal') && (
              <tr className="border-b">
                <td className="py-3">
                  <div className="font-medium">Online purchase</div>
                  <div className="text-gray-400 text-xs">ID: tx6</div>
                </td>
                <td className="py-3">May 10, 2023, 01:30 PM</td>
                <td className="py-3 font-medium">£150.00 <div className="text-xs text-gray-400">Fee: £0.75</div></td>
                <td className="py-3 flex items-center gap-2">
                  <FaArrowUp className="text-red-600" /> Withdrawal
                </td>
                <td className="py-3">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Completed</span>
                </td>
                <td className="py-3 text-right"><FaEllipsisV /></td>
              </tr>
            )}

            {matches('Family support', 'Transfer') && (
              <tr className="border-b">
                <td className="py-3">
                  <div className="font-medium">Family support</div>
                  <div className="text-gray-400 text-xs">ID: tx7</div>
                </td>
                <td className="py-3">May 5, 2023, 06:20 PM</td>
                <td className="py-3 font-medium">$500.00</td>
                <td className="py-3 flex items-center gap-2">
                  <FaExchangeAlt className="text-blue-600" /> Transfer
                </td>
                <td className="py-3">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Completed</span>
                </td>
                <td className="py-3 text-right"><FaEllipsisV /></td>
              </tr>
            )}

            {matches('Investment return', 'Deposit') && (
              <tr className="border-b">
                <td className="py-3">
                  <div className="font-medium">Investment return</div>
                  <div className="text-gray-400 text-xs">ID: tx8</div>
                </td>
                <td className="py-3">May 1, 2023, 02:45 PM</td>
                <td className="py-3 font-medium">₹2,000.00</td>
                <td className="py-3 flex items-center gap-2">
                  <FaArrowDown className="text-green-600" /> Deposit
                </td>
                <td className="py-3">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Completed</span>
                </td>
                <td className="py-3 text-right"><FaEllipsisV /></td>
              </tr>
            )}

            {matches('Restaurant payment', 'Withdrawal') && (
              <tr className="border-b">
                <td className="py-3">
                  <div className="font-medium">Restaurant payment</div>
                  <div className="text-gray-400 text-xs">ID: tx9</div>
                </td>
                <td className="py-3">Apr 28, 2023, 08:30 PM</td>
                <td className="py-3 font-medium">¥30,000.00 <div className="text-xs text-gray-400">Fee: ¥100.00</div></td>
                <td className="py-3 flex items-center gap-2">
                  <FaArrowUp className="text-red-600" /> Withdrawal
                </td>
                <td className="py-3">
                  <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">Failed</span>
                </td>
                <td className="py-3 text-right"><FaEllipsisV /></td>
              </tr>
            )}

            {matches('Consulting fee', 'Transfer') && (
              <tr>
                <td className="py-3">
                  <div className="font-medium">Consulting fee</div>
                  <div className="text-gray-400 text-xs">ID: tx10</div>
                </td>
                <td className="py-3">Apr 25, 2023, 03:15 PM</td>
                <td className="py-3 font-medium">$750.00 <div className="text-xs text-gray-400">Fee: $3.75</div></td>
                <td className="py-3 flex items-center gap-2">
                  <FaExchangeAlt className="text-blue-600" /> Transfer
                </td>
                <td className="py-3">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Completed</span>
                </td>
                <td className="py-3 text-right"><FaEllipsisV /></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
