import React from "react";

const TransfersHistoryTab = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Transfer History</h2>
        <p className="text-sm text-gray-500">View your past transfers</p>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search transfers..."
          className="flex-1 px-4 py-2 border rounded-md"
        />
        <select className="px-4 py-2 border rounded-md">
          <option>All Statuses</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>
        <button className="px-4 py-2 bg-gray-100 border rounded-md text-sm">
          Date Range
        </button>
        <button className="px-4 py-2 bg-gray-100 border rounded-md text-sm">
          Export History
        </button>
      </div>

      <div className="border rounded-md overflow-hidden">
        <div className="grid grid-cols-5 font-semibold bg-gray-100 text-sm px-4 py-2">
          <div>Recipient</div>
          <div>Date</div>
          <div>Amount</div>
          <div>Status</div>
          <div>Description</div>
        </div>

        {/* Transaction 1 */}
        <div className="grid grid-cols-5 items-start text-sm px-4 py-3 border-t">
          <div>
            <p className="font-medium">Jane Smith</p>
            <p className="text-xs text-gray-500">ID: tr.1</p>
          </div>
          <div>
            <p>Jun 1, 2023, 03:30 PM</p>
          </div>
          <div>
            <p className="font-medium">$500.00</p>
            <p className="text-xs text-gray-500">To: EUR (Fee: $2.50)</p>
          </div>
          <div>
            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
              Completed
            </span>
          </div>
          <div>Monthly rent payment</div>
        </div>

        {/* Transaction 2 */}
        <div className="grid grid-cols-5 items-start text-sm px-4 py-3 border-t">
          <div>
            <p className="font-medium">Alex Johnson</p>
            <p className="text-xs text-gray-500">ID: tr.2</p>
          </div>
          <div>
            <p>May 28, 2023, 07:20 PM</p>
          </div>
          <div>
            <p className="font-medium">€350.00</p>
            <p className="text-xs text-gray-500">To: GBP (Fee: €1.75)</p>
          </div>
          <div>
            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
              Completed
            </span>
          </div>
          <div>Consulting services</div>
        </div>

        {/* Transaction 3 */}
        <div className="grid grid-cols-5 items-start text-sm px-4 py-3 border-t">
          <div>
            <p className="font-medium">Sarah Williams</p>
            <p className="text-xs text-gray-500">ID: tr.3</p>
          </div>
          <div>
            <p>May 25, 2023, 02:15 PM</p>
          </div>
          <div>
            <p className="font-medium">£200.00</p>
            <p className="text-xs text-gray-500">To: USD (Fee: £1.00)</p>
          </div>
          <div>
            <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
              Pending
            </span>
          </div>
          <div>Family support</div>
        </div>

        {/* Transaction 4 */}
        <div className="grid grid-cols-5 items-start text-sm px-4 py-3 border-t">
          <div>
            <p className="font-medium">Takeshi Yamada</p>
            <p className="text-xs text-gray-500">ID: tr.4</p>
          </div>
          <div>
            <p>May 20, 2023, 09:45 PM</p>
          </div>
          <div>
            <p className="font-medium">$1,000.00</p>
            <p className="text-xs text-gray-500">To: JPY (Fee: $5.00)</p>
          </div>
          <div>
            <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700">
              Failed
            </span>
          </div>
          <div>Product purchase</div>
        </div>

        {/* Transaction 5 */}
        <div className="grid grid-cols-5 items-start text-sm px-4 py-3 border-t">
          <div>
            <p className="font-medium">Michael Brown</p>
            <p className="text-xs text-gray-500">ID: tr.5</p>
          </div>
          <div>
            <p>May 15, 2023, 04:10 PM</p>
          </div>
          <div>
            <p className="font-medium">¥50,000.00</p>
            <p className="text-xs text-gray-500">To: USD (Fee: ¥250.00)</p>
          </div>
          <div>
            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
              Completed
            </span>
          </div>
          <div>Investment return</div>
        </div>
      </div>

      <div className="mt-2 text-sm text-gray-500">
        Showing 5 of 5 transfers
      </div>
    </div>
  );
};

export default TransfersHistoryTab;
