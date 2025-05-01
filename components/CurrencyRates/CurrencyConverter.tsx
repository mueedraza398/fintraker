"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Calculator } from "lucide-react";


const currencies = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
];

export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(100);
  const [result, setResult] = useState<null | number>(null);

  const exchangeRate = 0.92; // Example static rate

  const handleConvert = () => {
    const converted = Number(amount) * exchangeRate;
    setResult(converted);
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="text-2xl font-semibold leading-none tracking-tight">Currency Converter</div>
        <div className="text-sm text-muted-foreground">
          Convert between different currencies using live exchange rates
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="grid gap-4 sm:gap-6">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fromCurrency">From Currency</Label>
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger id="fromCurrency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((curr) => (
                    <SelectItem key={curr.code} value={curr.code}>
                      {curr.code} - {curr.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="toCurrency">To Currency</Label>
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger id="toCurrency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((curr) => (
                    <SelectItem key={curr.code} value={curr.code}>
                      {curr.code} - {curr.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Amount & Convert */}
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <div className="flex gap-4">
              <Input
                id="amount"
                type="number"
                min={0}
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                placeholder="Enter amount"
                className="flex-1"
              />
              <Button onClick={handleConvert}>
                <Calculator className="mr-2 h-4 w-4" />
                Convert
              </Button>
            </div>
          </div>

          {/* Result */}
          {result !== null && (
            <div className="rounded-lg border p-4 text-center">
              <div className="text-sm text-muted-foreground">Result</div>
              <div className="mt-2 text-2xl font-bold">
                {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Exchange rate: 1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
