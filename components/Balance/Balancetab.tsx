'use client';

import { Button } from "@/components/ui/button";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaEllipsisV } from "react-icons/fa";

export default function Balancetab() {
  return (
    <div className="bg-white p-6 rounded-xl border">
      <h2 className="text-xl font-semibold text-gray-900">Your Balances</h2>
      <p className="text-sm text-gray-500 mb-4">You have 4 active balances</p>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-gray-500 border-b">
            <tr>
              <th className="py-3 pr-4">Currency ↑</th>
              <th className="py-3 pr-4">Balance</th>
              <th className="py-3 pr-4">Last Updated</th>
              <th className="py-3 pr-4">Created</th>
              <th className="py-3 pr-4">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-900">
            {/* Euro */}
            <tr className="border-b">
              <td className="py-3 pr-4 flex items-center gap-2">
                <span className="border rounded-full px-2 py-0.5 text-xs font-medium bg-gray-100">EUR</span>
                Euro
              </td>
              <td className="py-3 pr-4 font-medium">€3,180.50</td>
              <td className="py-3 pr-4">May 28, 2023, 09:45 PM</td>
              <td className="py-3 pr-4">Feb 20, 2023, 02:15 PM</td>
              <td className="py-3 pr-4 flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <FaArrowUpRightFromSquare className="w-3 h-3" />
                  Top Up
                </Button>
                <FaEllipsisV className="text-gray-400 w-4 h-4 cursor-pointer" />
              </td>
            </tr>

            {/* GBP */}
            <tr className="border-b">
              <td className="py-3 pr-4 flex items-center gap-2">
                <span className="border rounded-full px-2 py-0.5 text-xs font-medium bg-gray-100">GBP</span>
                British Pound
              </td>
              <td className="py-3 pr-4 font-medium">£2,750.25</td>
              <td className="py-3 pr-4">May 25, 2023, 01:30 PM</td>
              <td className="py-3 pr-4">Mar 10, 2023, 04:10 PM</td>
              <td className="py-3 pr-4 flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <FaArrowUpRightFromSquare className="w-3 h-3" />
                  Top Up
                </Button>
                <FaEllipsisV className="text-gray-400 w-4 h-4 cursor-pointer" />
              </td>
            </tr>

            {/* JPY */}
            <tr className="border-b">
              <td className="py-3 pr-4 flex items-center gap-2">
                <span className="border rounded-full px-2 py-0.5 text-xs font-medium bg-gray-100">JPY</span>
                Japanese Yen
              </td>
              <td className="py-3 pr-4 font-medium">¥210,450.75</td>
              <td className="py-3 pr-4">May 20, 2023, 03:15 PM</td>
              <td className="py-3 pr-4">Apr 5, 2023, 06:45 PM</td>
              <td className="py-3 pr-4 flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <FaArrowUpRightFromSquare className="w-3 h-3" />
                  Top Up
                </Button>
                <FaEllipsisV className="text-gray-400 w-4 h-4 cursor-pointer" />
              </td>
            </tr>

            {/* USD */}
            <tr>
              <td className="py-3 pr-4 flex items-center gap-2">
                <span className="border rounded-full px-2 py-0.5 text-xs font-medium bg-gray-100">USD</span>
                US Dollar
              </td>
              <td className="py-3 pr-4 font-medium">$5,240.00</td>
              <td className="py-3 pr-4">Jun 1, 2023, 07:20 PM</td>
              <td className="py-3 pr-4">Jan 15, 2023, 03:30 PM</td>
              <td className="py-3 pr-4 flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <FaArrowUpRightFromSquare className="w-3 h-3" />
                  Top Up
                </Button>
                <FaEllipsisV className="text-gray-400 w-4 h-4 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
