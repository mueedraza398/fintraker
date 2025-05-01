import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FiPlusCircle } from "react-icons/fi";
import Balancetab from '@/components/Balance/Balancetab';
import QuickActions from '@/components/Balance/QuickActions';


const page = () => {
  return (
    <div>

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Balances</h1>
        <p className="text-muted-foreground">
          Manage your balances across different currencies
        </p>
      </div>

      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-emerald-600 hover:bg-emerald-700"
      >
        <FiPlusCircle className="h-4 w-4" />
        New Balance
      </button>
    </div>

      


<Tabs defaultValue="All Balances">
  <TabsList>
    <TabsTrigger value="All Balances">All Balances</TabsTrigger>
    <TabsTrigger value="Quick Action">Quick Action</TabsTrigger>
    <TabsTrigger value="Analytics">Analytics</TabsTrigger>

  </TabsList>
  <TabsContent value="All Balances">
    <Balancetab/>
  </TabsContent>
  <TabsContent value="Quick Action">
    <QuickActions/>
  </TabsContent>
  <TabsContent value="Analytics">
  
  </TabsContent>
</Tabs>



    </div>
  )
}

export default page