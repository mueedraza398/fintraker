import React from 'react'
import { CiHome } from "react-icons/ci";
import { FiDollarSign } from "react-icons/fi";
import { BsWallet } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { LuChartColumnDecreasing } from "react-icons/lu";
import { FiRefreshCw } from "react-icons/fi";
import { IoMdContacts } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import Link from 'next/link';
const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col p-4 w-64 min-h-screen bg-white border-r">
  <nav className="flex flex-col gap-2">
    
    {/* Dashboard */}
    <Link href="#" className="flex items-center gap-3 p-2 rounded-md text-gray-600 hover:bg-gray-100">
    <CiHome />
      <span>Dashboard</span>
    </Link>

    {/* Balances - Active */}
    <Link href="#" className="flex items-center gap-3 p-2 rounded-md  text-gray-600 font-medium">
    <FiDollarSign />
      <span>Balances</span>
    </Link>

    {/* Transactions */}
    <a href="#" className="flex items-center gap-3 p-2 rounded-md text-gray-600 hover:bg-gray-100">
    <BsWallet />      <span>Transactions</span>
    </a>

    {/* Transfer */}
    <a href="#" className="flex items-center gap-3 p-2 rounded-md text-gray-600 hover:bg-gray-100">
    <IoIosSend />      <span>Transfer</span>
    </a>

    {/* Top Up */}
    <a href="#" className="flex items-center gap-3 p-2 rounded-md text-gray-600 hover:bg-gray-100">
    <CiCirclePlus />     <span>Top Up</span>
    </a>

    {/* Withdraw */}
    <Link href="#" className="flex items-center gap-3 p-2 rounded-md text-gray-600 hover:bg-gray-100">
    <FiRefreshCw />
      <span>Withdraw</span>
    </Link>

    {/* Currency Rates */}
    <Link href="#" className="flex items-center gap-3 p-2 rounded-md text-gray-600 hover:bg-gray-100">
    <LuChartColumnDecreasing />
      <span>Currency Rates</span>
    </Link>

    {/* Contacts */}
    <Link href="#" className="flex items-center gap-3 p-2 rounded-md text-gray-600 hover:bg-gray-100">
    <IoMdContacts />      <span>Contacts</span>
    </Link>

    {/* Settings */}
    <Link href="#" className="flex items-center gap-3 p-2 rounded-md text-gray-600 hover:bg-gray-100">
    <CiSettings />      <span>Settings</span>
    </Link>

  </nav>
</div>

    </div>
  )
}

export default Sidebar