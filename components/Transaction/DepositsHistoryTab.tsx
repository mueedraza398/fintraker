'use client';
import { useState } from 'react';
import { FiSearch, FiFilter, FiMoreVertical } from 'react-icons/fi';
import { BsArrowDownCircle } from 'react-icons/bs';

export default function DepositsHistoryTab() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const matches = (label = '', type = '') => {
    const matchSearch = label.toLowerCase().includes(search.toLowerCase());
    const matchType = filter === 'All' || filter === type;
    return matchSearch && matchType;
  };

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
        <div className="relative w-full sm:w-1/2">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <button
            onClick={() =>
              setFilter((prev) =>
                prev === 'All' ? 'Deposit' : prev === 'Deposit' ? 'All' : 'Deposit'
              )
            }
            className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            <FiFilter /> Filter
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-md shadow-sm">
        <h2 className="text-xl font-semibold">Deposits</h2>
        <p className="text-sm text-gray-500 mb-4">All incoming funds to your accounts</p>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b">
                <th className="py-2">Transaction</th>
                <th className="py-2">Date ↓</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Type</th>
                <th className="py-2">Status</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {(matches('Salary deposit', 'Deposit')) && (
                <tr className="border-b">
                  <td className="py-3">
                    <div className="font-medium text-gray-900">Salary deposit</div>
                    <div className="text-xs text-gray-500">ID: tx1</div>
                  </td>
                  <td className="py-3">Jun 1, 2023, 03:30 PM</td>
                  <td className="py-3 font-semibold">$1,250.00</td>
                  <td className="py-3">
                    <div className="flex items-center gap-1">
                      <BsArrowDownCircle className="text-emerald-500" /> Deposit
                    </div>
                  </td>
                  <td className="py-3">
                    <span className="text-white bg-emerald-500 px-2 py-1 rounded-full text-xs">Completed</span>
                  </td>
                  <td className="py-3">
                    <FiMoreVertical className="text-gray-500" />
                  </td>
                </tr>
              )}

              {(matches('Client payment', 'Deposit')) && (
                <tr className="border-b">
                  <td className="py-3">
                    <div className="font-medium text-gray-900">Client payment</div>
                    <div className="text-xs text-gray-500">ID: tx5</div>
                  </td>
                  <td className="py-3">May 15, 2023, 04:10 PM</td>
                  <td className="py-3 font-semibold">€1,000.00</td>
                  <td className="py-3">
                    <div className="flex items-center gap-1">
                      <BsArrowDownCircle className="text-emerald-500" /> Deposit
                    </div>
                  </td>
                  <td className="py-3">
                    <span className="text-white bg-emerald-500 px-2 py-1 rounded-full text-xs">Completed</span>
                  </td>
                  <td className="py-3">
                    <FiMoreVertical className="text-gray-500" />
                  </td>
                </tr>
              )}

              {(matches('Investment return', 'Deposit')) && (
                <tr>
                  <td className="py-3">
                    <div className="font-medium text-gray-900">Investment return</div>
                    <div className="text-xs text-gray-500">ID: tx8</div>
                  </td>
                  <td className="py-3">May 1, 2023, 02:45 PM</td>
                  <td className="py-3 font-semibold">¥2,000.00</td>
                  <td className="py-3">
                    <div className="flex items-center gap-1">
                      <BsArrowDownCircle className="text-emerald-500" /> Deposit
                    </div>
                  </td>
                  <td className="py-3">
                    <span className="text-white bg-emerald-500 px-2 py-1 rounded-full text-xs">Completed</span>
                  </td>
                  <td className="py-3">
                    <FiMoreVertical className="text-gray-500" />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
