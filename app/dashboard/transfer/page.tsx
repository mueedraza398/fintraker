import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TransferFormTab from '@/components/transfer/TransferFormTab'
import TransfersHistoryTab from '@/components/Transaction/TransfersHistoryTab'



const page = () => {
  return (
    <div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className='py-4'>
                <h1 className="text-3xl font-bold tracking-tight">Transfer Money</h1>
                <p className="text-muted-foreground">
                Send money to other users quickly and securely</p>
              </div>
        
            </div>

            <Tabs defaultValue="Transfer">
  <TabsList>
    <TabsTrigger value="Transfer">Transfer</TabsTrigger>
    <TabsTrigger value="Transfer History">Transfer History</TabsTrigger>
   

  </TabsList>
  <TabsContent value="Transfer">
    <TransferFormTab/>
   
    
  </TabsContent>
  <TabsContent value="Transfer History">
   
   <TransfersHistoryTab/>
  </TabsContent>
  
</Tabs>


    </div>
  )
}

export default page