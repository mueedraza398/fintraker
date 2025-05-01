"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";


export default function Withdraw() {
  const [method, setMethod] = useState("card");

  return (
    <main className=" w-full flex-1 p-4 md:p-6 pb-20 md:pb-6 overflow-x-hidden">
      <div className=" w-full space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Withdraw</h1>
          <p className="text-muted-foreground">Withdraw funds from your account</p>
        </div>

        <div className="rounded-lg border bg-white shadow-sm">
          <div className="p-6 border-b space-y-1.5">
            <h2 className="text-2xl font-semibold">Withdraw Funds
            </h2>
            <p className="text-sm text-muted-foreground">
            Select a balance and enter the amount you want to withdraw
            </p>
          </div>

          <div className="p-6 space-y-6">
            {/* Balance and Amount */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label className="p-3" htmlFor="balance">Select Balance</Label>
                <div className="relative">
                  <select
                    id="balance"
                    className="w-full h-10 rounded-md border px-3 pr-8 text-sm bg-background"
                  >
                   
                    <option>USD - $5,240.00</option>
                    <option>EUR - €3,180.50</option>
                    <option>GBP - £2,750.25</option>
                    <option>JPY - ¥210,450.75</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              <div>
                <Label className="p-3" htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            <hr />

            {/* Payment Tabs */}
            <div className="space-y-4">
              <Label>Withdraw Method</Label>
              <Tabs defaultValue="card" className="w-full" onValueChange={setMethod}>
                <TabsList className="grid grid-cols-2 w-full bg-muted">
                  <TabsTrigger value="card">Bank Account</TabsTrigger>
                  <TabsTrigger value="bank">Credit/Debit Card</TabsTrigger>
                </TabsList>

                <TabsContent value="bank" className="space-y-4 pt-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" placeholder="John Doe" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cardExpiry">Expiry Date</Label>
                      <Input id="cardExpiry" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cardCvc">CVC</Label>
                      <Input id="cardCvc" placeholder="123" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="card" className="pt-4 space-y-4">

                <div className="space-y-2">
    <Label htmlFor="Bank Name">Bank Name</Label>
    <Input
      id="Bank Name"
      placeholder="Bank Of America"
    />
  </div>


  <div className="space-y-2">
    <Label htmlFor="accountName">Account Holder Name</Label>
    <Input
      id="accountName"
      placeholder="John Doe"
    />
  </div>
  <div className="space-y-2">
    <Label htmlFor="accountNumber">Account Number</Label>
    <Input
      id="accountNumber"
      placeholder="123456789"
    />
  </div>
  <div className="space-y-2">
    <Label htmlFor="routingNumber">Routing Number</Label>
    <Input
      id="routingNumber"
      placeholder="987654321"
    />
  </div>

  <div className="space-y-2 border text-sm px-2 py-2">
    <p>Withdrawals typically take 1-3 business days to process. A small fee may apply depending on your withdrawal method and amount.</p>
  </div>

</TabsContent>

              </Tabs>
            </div>

            <Button className="w-full bg-black text-white hover:bg-emerald-700">
              Withdraw Funds
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
