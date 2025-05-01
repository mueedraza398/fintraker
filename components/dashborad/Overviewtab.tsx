import React from 'react'

const Overviewtab = () => {
  return (
    <div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 min-h-screen">
      
      {/* Recent Transactions */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-bold">Recent Transactions</h2>
        <p className="text-sm text-gray-500 mb-4">Your latest financial activities</p>

        <div className="space-y-4">

          {/* Transaction 1 */}
          <div className="flex items-center justify-between border p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <span className="bg-green-100 text-green-500 p-2 rounded-full text-xl">↙</span>
              <div>
                <h3 className="font-semibold">Deposit</h3>
                <p className="text-sm text-gray-500">Jun 1, 2023</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-green-600">+USD 1250.00</p>
              <p className="text-xs text-green-500">● Completed</p>
            </div>
          </div>

          {/* Transaction 2 */}
          <div className="flex items-center justify-between border p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <span className="bg-blue-100 text-blue-500 p-2 rounded-full text-xl">⟳</span>
              <div>
                <h3 className="font-semibold">Transfer to Jane Smith</h3>
                <p className="text-sm text-gray-500">May 28, 2023</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-red-600">-EUR 450.00</p>
              <p className="text-xs text-green-500">● Completed</p>
            </div>
          </div>

          {/* Transaction 3 */}
          <div className="flex items-center justify-between border p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <span className="bg-red-100 text-red-500 p-2 rounded-full text-xl">↗</span>
              <div>
                <h3 className="font-semibold">Withdrawal</h3>
                <p className="text-sm text-gray-500">May 25, 2023</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-red-600">-USD 800.00</p>
              <p className="text-xs text-green-500">● Completed</p>
            </div>
          </div>

          {/* Transaction 4 */}
          <div className="flex items-center justify-between border p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <span className="bg-blue-100 text-blue-500 p-2 rounded-full text-xl">⟳</span>
              <div>
                <h3 className="font-semibold">Transfer to Alex Johnson</h3>
                <p className="text-sm text-gray-500">May 20, 2023</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-yellow-600">-GBP 325.00</p>
              <p className="text-xs text-yellow-500">● Pending</p>
            </div>
          </div>

          {/* Transaction 5 */}
          <div className="flex items-center justify-between border p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <span className="bg-green-100 text-green-500 p-2 rounded-full text-xl">↙</span>
              <div>
                <h3 className="font-semibold">Deposit</h3>
                <p className="text-sm text-gray-500">May 15, 2023</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-green-600">+EUR 1000.00</p>
              <p className="text-xs text-green-500">● Completed</p>
            </div>
          </div>

        </div>
      </div>

      {/* Currency Rates */}
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-bold">Currency Rates</h2>
        <p className="text-sm text-gray-500 mb-4">
          Live exchange rates<br />
          <span className="text-xs">Base currency: USD - Updated: 3:02:00 PM</span>
        </p>

        <div className="space-y-4">

          {/* EUR */}
          <div className="flex justify-between border p-3 rounded-lg">
            <div>
              <h4 className="font-semibold">EUR</h4>
              <p className="text-sm text-gray-500">Euro</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">0.9200</p>
              <p className="text-xs text-green-500">↑ 0.02%</p>
            </div>
          </div>

          {/* GBP */}
          <div className="flex justify-between border p-3 rounded-lg">
            <div>
              <h4 className="font-semibold">GBP</h4>
              <p className="text-sm text-gray-500">British Pound</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">0.7900</p>
              <p className="text-xs text-red-500">↓ 0.01%</p>
            </div>
          </div>

          {/* JPY */}
          <div className="flex justify-between border p-3 rounded-lg">
            <div>
              <h4 className="font-semibold">JPY</h4>
              <p className="text-sm text-gray-500">Japanese Yen</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">149.8200</p>
              <p className="text-xs text-green-500">↑ 0.35%</p>
            </div>
          </div>

          {/* CAD */}
          <div className="flex justify-between border p-3 rounded-lg">
            <div>
              <h4 className="font-semibold">CAD</h4>
              <p className="text-sm text-gray-500">Canadian Dollar</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">1.3600</p>
              <p className="text-xs text-red-500">↓ 0.03%</p>
            </div>
          </div>

          {/* AUD */}
          <div className="flex justify-between border p-3 rounded-lg">
            <div>
              <h4 className="font-semibold">AUD</h4>
              <p className="text-sm text-gray-500">Australian Dollar</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">1.5200</p>
              <p className="text-xs text-green-500">↑ 0.01%</p>
            </div>
          </div>

        </div>
      </div>

    </div>
    </div>
  )
}

export default Overviewtab