'use client';
import { FaArrowDown, FaArrowUp, FaExchangeAlt } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function TransactionHistory() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 border">
      <div className="mb-6 text-center">
        <h2 className="text-xl font-semibold text-gray-900">Transaction History</h2>
        <p className="text-sm text-gray-500">View and filter your transaction history</p>
        <button className="mt-3 px-4 py-1 text-sm font-medium text-white bg-black rounded hover:bg-gray-800">
          View All
        </button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-5 bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-700">
          <div>Transaction</div>
          <div>Date</div>
          <div>Amount</div>
          <div>Status</div>
          <div className="text-right">Actions</div>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-5 items-center px-4 py-4 border-t">
          <div className="flex items-center space-x-2">
            <FaArrowDown className="text-green-500" />
            <div>
              <div className="font-medium text-gray-900">Salary deposit</div>
              <div className="text-xs text-gray-500">Deposit</div>
            </div>
          </div>
          <div className="text-sm text-gray-500">Jun 1, 2023</div>
          <div className="font-semibold text-gray-800">$1,250.00</div>
          <div>
            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
              Completed
            </span>
          </div>
          <div className="flex justify-end">
            <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-5 items-center px-4 py-4 border-t">
          <div className="flex items-center space-x-2">
            <FaExchangeAlt className="text-blue-500" />
            <div>
              <div className="font-medium text-gray-900">Payment for services</div>
              <div className="text-xs text-gray-500">Transfer</div>
            </div>
          </div>
          <div className="text-sm text-gray-500">May 28, 2023</div>
          <div className="font-semibold text-gray-800">€450.00</div>
          <div>
            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
              Completed
            </span>
          </div>
          <div className="flex justify-end">
            <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-5 items-center px-4 py-4 border-t">
          <div className="flex items-center space-x-2">
            <FaArrowUp className="text-red-500" />
            <div>
              <div className="font-medium text-gray-900">ATM withdrawal</div>
              <div className="text-xs text-gray-500">Withdrawal</div>
            </div>
          </div>
          <div className="text-sm text-gray-500">May 25, 2023</div>
          <div className="font-semibold text-gray-800">$800.00</div>
          <div>
            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
              Completed
            </span>
          </div>
          <div className="flex justify-end">
            <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-5 items-center px-4 py-4 border-t">
          <div className="flex items-center space-x-2">
            <FaExchangeAlt className="text-blue-500" />
            <div>
              <div className="font-medium text-gray-900">Rent payment</div>
              <div className="text-xs text-gray-500">Transfer</div>
            </div>
          </div>
          <div className="text-sm text-gray-500">May 20, 2023</div>
          <div className="font-semibold text-gray-800">£325.00</div>
          <div>
            <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-medium">
              Pending
            </span>
          </div>
          <div className="flex justify-end">
            <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-5 items-center px-4 py-4 border-t">
          <div className="flex items-center space-x-2">
            <FaArrowDown className="text-green-500" />
            <div>
              <div className="font-medium text-gray-900">Client payment</div>
              <div className="text-xs text-gray-500">Deposit</div>
            </div>
          </div>
          <div className="text-sm text-gray-500">May 15, 2023</div>
          <div className="font-semibold text-gray-800">€1,000.00</div>
          <div>
            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
              Completed
            </span>
          </div>
          <div className="flex justify-end">
            <BsThreeDotsVertical className="text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-gray-50">
          View All Transactions
        </button>
      </div>
    </div>
  );
}
