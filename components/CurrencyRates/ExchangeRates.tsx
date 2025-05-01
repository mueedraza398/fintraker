"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function ExchangeRates() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="p-4 md:p-6">
      <div className="rounded-xl border bg-white p-4 shadow-sm">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Current Exchange Rates</h2>
          <p className="text-sm text-gray-500">
            Base currency: USD - Updated: 11:37:01 AM
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* EUR */}
          <div className="rounded-xl border  bg-white shadow-sm overflow-hidden">
            <div className="p-4">
              <div className="flex items-center justify-between py-3 ">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full font-semibold">EUR</span>
                  <h3 className="text-lg font-bold">Euro</h3>
                </div>
                <div className="flex items-center text-green-600 text-sm font-medium py-2" >
                  <ArrowUpRight className="w-4 h-4" />
                  +0.02%
                </div>
              </div>
              <p className="text-sm text-gray-600">1 USD = 0.9200 EUR</p>
            </div>
            <div className="relative h-[2px] w-full bg-gray-100 overflow-hidden">
              <div className={`h-full bg-green-500 transition-all duration-1000 ease-out ${animate ? "w-full" : "w-0"}`} />
            </div>
          </div>

          {/* GBP */}
          <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full font-semibold">GBP</span>
                  <h3 className="text-lg font-bold">British <br /> Pound</h3>
                </div>
                <div className="flex items-center text-red-600 text-sm font-medium">
                  <ArrowDownRight className="w-4 h-4" />
                  -0.01%
                </div>
              </div>
              <p className="text-sm text-gray-600">1 USD = 0.7900 GBP</p>
            </div>
            <div className="relative h-[2px] w-full bg-gray-100 overflow-hidden">
              <div className={`h-full bg-red-500 transition-all duration-1000 ease-out ${animate ? "w-full" : "w-0"}`} />
            </div>
          </div>

          {/* JPY */}
          <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full font-semibold">JPY</span>
                  <h3 className="text-lg font-bold">Japanese <br /> Yen</h3>
                </div>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <ArrowUpRight className="w-4 h-4" />
                  +0.35%
                </div>
              </div>
              <p className="text-sm text-gray-600">1 USD = 149.8200 JPY</p>
            </div>
            <div className="relative h-[2px] w-full bg-gray-100 overflow-hidden">
              <div className={`h-full bg-green-500 transition-all duration-1000 ease-out ${animate ? "w-full" : "w-0"}`} />
            </div>
          </div>

          {/* CAD */}
          <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full font-semibold">CAD</span>
                  <h3 className="text-lg font-bold">Canadian<br /> Dollar</h3>
                </div>
                <div className="flex items-center text-red-600 text-sm font-medium">
                  <ArrowDownRight className="w-4 h-4" />
                  -0.03%
                </div>
              </div>
              <p className="text-sm text-gray-600">1 USD = 1.3600 CAD</p>
            </div>
            <div className="relative h-[2px] w-full bg-gray-100 overflow-hidden">
              <div className={`h-full bg-red-500 transition-all duration-1000 ease-out ${animate ? "w-full" : "w-0"}`} />
            </div>
          </div>

          {/* AUD */}
          <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full font-semibold">AUD</span>
                  <h3 className="text-lg font-bold">Australian Dollar</h3>
                </div>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <ArrowUpRight className="w-4 h-4" />
                  +0.01%
                </div>
              </div>
              <p className="text-sm text-gray-600">1 USD = 1.5200 AUD</p>
            </div>
            <div className="relative h-[2px] w-full bg-gray-100 overflow-hidden">
              <div className={`h-full bg-green-500 transition-all duration-1000 ease-out ${animate ? "w-full" : "w-0"}`} />
            </div>
          </div>

          {/* CHF */}
          <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full font-semibold">CHF</span>
                  <h3 className="text-lg font-bold">Swiss <br /> Franc</h3>
                </div>
                <div className="flex items-center text-red-600 text-sm font-medium">
                  <ArrowDownRight className="w-4 h-4" />
                  -0.02%
                </div>
              </div>
              <p className="text-sm text-gray-600">1 USD = 0.8800 CHF</p>
            </div>
            <div className="relative h-[2px] w-full bg-gray-100 overflow-hidden">
              <div className={`h-full bg-red-500 transition-all duration-1000 ease-out ${animate ? "w-full" : "w-0"}`} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
