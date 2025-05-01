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
              <div className='px-4 py-4'>
                <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
                <p className="text-muted-foreground">
                View and manage your transaction history                </p>
              </div>
        
            
            </div>

            <Tabs defaultValue="All Transaction" className="px-4">
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