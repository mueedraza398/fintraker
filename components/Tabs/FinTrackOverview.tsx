"use client";

import { Globe, Shield, Users } from "lucide-react";
import React from "react";

  

interface FeatureTagProps {
  label: string;
}

const FeatureTag: React.FC<FeatureTagProps> = ({ label }) => (
  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-emerald-50 text-emerald-700">
    {label}
  </span>
);

const FinTrackOverview: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-5 gap-8 md:px-32">
      {/* Left Side - Overview */}
      <div className="md:col-span-3 space-y-6">
        <div className="rounded-lg border border-emerald-100 shadow-sm overflow-hidden bg-white">
          <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Globe className="h-5 w-5" />
              How FinTrack Works
            </h2>
            <p className="text-sm text-emerald-100">
              A comprehensive overview of the application
            </p>
          </div>
          <div className="p-6 space-y-6">
            <p>
              FinTrack is designed to provide a seamless and secure finance
              management experience. The application follows a user-centric
              approach with these core principles:
            </p>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <b>User Authentication</b> – Secure JWT-based authentication
                system with email/password login, registration, and password
                reset functionality.
              </li>
              <li>
                <b>Multi-Currency Support</b> – Create and maintain balances in
                different currencies with real-time exchange rate integration.
              </li>
              <li>
                <b>Balance Management</b> – Easy top-up and withdrawal
                functionality with comprehensive transaction history.
              </li>
              <li>
                <b>Transfer System</b> – Send money to other users with currency
                conversion if needed.
              </li>
              <li>
                <b>Currency Tracking</b> – Monitor exchange rates with
                historical data visualization.
              </li>
              <li>
                <b>Contact Management</b> – Store and manage frequent transfer
                recipients for quick access.
              </li>
            </ol>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2 text-emerald-800">
                Application Flow
              </h3>
              <p className="text-emerald-700 text-sm">
                When a user registers, they get access to create balances in
                different currencies. They can top up these balances, make
                transfers to other users, track transactions, and monitor
                currency rates. Currency conversions are handled automatically.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Feature Cards */}
      <div className="md:col-span-2 space-y-6">
        {/* Security Card */}
        <div className="rounded-lg border border-emerald-100 shadow-sm p-6 bg-white">
          <div className="flex flex-col space-y-1.5">
            <div className="rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center mb-2">
              <Shield className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold">Security First</h3>
          </div>
          <p className="mt-4 text-sm">
            FinTrack implements multiple security layers including JWT-based
            authentication, password hashing, two-factor authentication, and
            session timeout controls. All financial transactions are securely
            processed and verified.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <FeatureTag label="JWT Authentication" />
            <FeatureTag label="Two-Factor Auth" />
            <FeatureTag label="Encrypted Data" />
          </div>
        </div>

        {/* User Experience Card */}
        <div className="rounded-lg border border-emerald-100 shadow-sm p-6 bg-white">
          <div className="flex flex-col space-y-1.5">
            <div className="rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center mb-2">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-semibold">User Experience</h3>
          </div>
          <p className="mt-4 text-sm">
            The application features a responsive design that works on all
            devices, real-time updates for currency rates and transactions, and
            an intuitive interface for managing finances with minimal friction.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <FeatureTag label="Responsive Design" />
            <FeatureTag label="Real-time Updates" />
            <FeatureTag label="Intuitive UI" />
          </div>
        </div>
      </div>
   
   





    </section>
    
    
  );
};

export default FinTrackOverview;
