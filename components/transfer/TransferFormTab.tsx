"use client";

import { useState } from "react";
import { Send, ChevronDown, Info } from "lucide-react";

export default function TransferForm() {
  const [fromBalance, setFromBalance] = useState("");
  const [recipient, setRecipient] = useState("");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = () => {
    

    console.log({
      fromBalance,
      recipient,
      currency,
      amount,
      note,
    });

    alert("Transfer submitted successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6 space-y-6">
      <h2 className="text-2xl font-bold">Make a Transfer</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* From Balance */}
          <div className="space-y-2">
            <label className="text-sm font-medium">From Balance</label>
            <select
              value={fromBalance}
              onChange={(e) => setFromBalance(e.target.value)}
              className="w-full h-10 px-3 py-2 text-sm border rounded-md"
              required
            >
              <option value="">Select Balance</option>
              <option value="bal_1">USD - $5,240.00</option>
              <option value="bal_2">EUR - €3,180.50</option>
              <option value="bal_3">GBP - £2,750.25</option>
              <option value="bal_4">JPY - ¥210,450.75</option>
            </select>
          </div>

          {/* Recipient */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Recipient</label>
            <select
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="w-full h-10 px-3 py-2 text-sm border rounded-md"
              required
            >
              <option value="">Select Recipient</option>
              <option value="user_1">Jane Smith</option>
              <option value="user_2">Alex Johnson</option>
              <option value="user_3">Sarah Williams</option>
            </select>
          </div>

          {/* Amount */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Amount</label>
            <input
              type="number"
              min="0"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full h-10 px-3 py-2 text-sm border rounded-md"
              placeholder="Enter amount"
              required
            />
          </div>

          {/* Currency */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Recipient Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full h-10 px-3 py-2 text-sm border rounded-md"
              required
            >
              <option value="">Select Currency</option>
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="JPY">JPY - Japanese Yen</option>
            </select>
          </div>
        </div>

        {/* Note */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Note (Optional)</label>
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full h-10 px-3 py-2 text-sm border rounded-md"
            placeholder="Add a note for the recipient"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md text-sm font-medium"
        >
          <Send className="w-4 h-4" />
          Send Transfer
        </button>
      </form>

      {/* 🔽 Transfer Tips Section */}
      <div className="mt-10  text-black border rounded-xl p-6">
  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
    <Info className="w-5 h-5" />
    Transfer Tips
  </h3>
  <ul className="list-disc list-inside space-y-2 text-sm">
    <li>Double-check the recipient details before sending.</li>
    <li>Transfers are usually processed instantly.</li>
    <li>Use notes to track the purpose of each transfer.</li>
  </ul>
</div>
    </div>
  );
}
