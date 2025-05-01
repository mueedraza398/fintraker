import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FiPlusCircle } from "react-icons/fi";
import Balancetab from '@/components/Balance/Balancetab';
import QuickActions from '@/components/Balance/QuickActions';


const page = () => {
  return (
    <div>

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className ="py-4 px-4" >
        <h1 className="text-3xl font-bold tracking-tight">Balances</h1>
        <p className="text-muted-foreground">
          Manage your balances across different currencies
        </p>
      </div>

      
       
    </div>

      


<Tabs defaultValue="All Balances" className="px-4">
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