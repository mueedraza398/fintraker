import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FiPlusCircle } from "react-icons/fi";
import ExchangeRates from '@/components/CurrencyRates/ExchangeRates';
import CurrencyConverter from '@/components/CurrencyRates/CurrencyConverter';



const page = () => {
  return (
    <div>

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-3">
      <div className='py-5'>
        <h1 className="text-3xl font-bold tracking-tight">Balances</h1>
        <p className="text-muted-foreground">
          Manage your balances across different currencies
        </p>
      </div>

     
    </div>

      


<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="Exchange Rates">Exchange Rates</TabsTrigger>
    <TabsTrigger value="Currency Converter">Currency Converter</TabsTrigger>
    <TabsTrigger value="Historical Charts">Historical Charts</TabsTrigger>

  </TabsList>
  <TabsContent value="Exchange Rates">

    <ExchangeRates/>
   
  </TabsContent>
  <TabsContent value="Currency Converter">

  <CurrencyConverter/>
   
  </TabsContent>
  <TabsContent value="Historical Charts">
  
  </TabsContent>
</Tabs>



    </div>
  )
}

export default page