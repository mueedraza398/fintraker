import React from 'react'
import { FiPlusCircle } from 'react-icons/fi'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TransactionHistoryTab from '@/components/Transaction/TransactionHistoryTab'
import DepositsHistoryTab from '@/components/Transaction/DepositsHistoryTab'
import WithdrawalsHistoryTab from '@/components/Transaction/WithdrawalsHistoryTab'
import TransfersHistoryTab from '@/components/Transaction/TransfersHistoryTab'


const page = () => {
  return (
    <div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
                <p className="text-muted-foreground">
                View and manage your transaction history                </p>
              </div>
        
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-emerald-600 hover:bg-emerald-700"
              >
                <FiPlusCircle className="h-4 w-4" />
                Export
              </button>
            </div>

            <Tabs defaultValue="All Transaction">
  <TabsList>
    <TabsTrigger value="All Transaction">All Transaction</TabsTrigger>
    <TabsTrigger value="Deposits">Deposits</TabsTrigger>
    <TabsTrigger value="Withdrawals">Withdrawals</TabsTrigger>
    <TabsTrigger value="Transfers">Transfers</TabsTrigger>

  </TabsList>
  <TabsContent value="All Transaction">
    <TransactionHistoryTab/>
    
  </TabsContent>
  <TabsContent value="Deposits">
    <DepositsHistoryTab/>
   
  </TabsContent>
  <TabsContent value="Withdrawals">
    <WithdrawalsHistoryTab/>
  
  </TabsContent>
  <TabsContent value="Transfers">
  <TransfersHistoryTab/>
  
  </TabsContent>

</Tabs>


    </div>
  )
}

export default page