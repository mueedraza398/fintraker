import { ArrowRightLeft, Upload, Send } from 'lucide-react';

export default function QuickActions() {
  return (
    <div className="p-6 bg-white rounded-lg shadow border">
      <h2 className="text-2xl font-semibold mb-1">Quick Actions</h2>
      <p className="text-gray-500 mb-6">Manage your balances with these quick actions</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Top Up */}
        <div className="border rounded-lg p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-1">Top Up</h3>
            <p className="text-sm text-gray-600">Add funds to your balance</p>
            <p className="text-sm text-gray-600 mt-1">Instantly add funds to any of your currency balances.</p>
          </div>
          <button className="mt-4 flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700 transition">
            <Upload size={16} />
            Top Up Balance
          </button>
        </div>

        {/* Withdraw */}
        <div className="border rounded-lg p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-1">Withdraw</h3>
            <p className="text-sm text-gray-600">Withdraw funds from your balance</p>
            <p className="text-sm text-gray-600 mt-1">Withdraw funds to your linked bank account or payment method.</p>
          </div>
          <button className="mt-4 flex items-center justify-center gap-2 border px-4 py-2 rounded hover:bg-gray-100 transition">
            <ArrowRightLeft size={16} />
            Withdraw Funds
          </button>
        </div>

        {/* Transfer */}
        <div className="border rounded-lg p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-1">Transfer</h3>
            <p className="text-sm text-gray-600">Send money to other users</p>
            <p className="text-sm text-gray-600 mt-1">Transfer funds to other users quickly and securely.</p>
          </div>
          <button className="mt-4 flex items-center justify-center gap-2 border px-4 py-2 rounded hover:bg-gray-100 transition">
            <Send size={16} />
            Transfer Money
          </button>
        </div>
      </div>
    </div>
  );
}
