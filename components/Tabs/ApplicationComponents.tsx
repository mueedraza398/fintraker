// components/ApplicationComponents.tsx

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const modules = [
  {
    title: "Authentication Module",
    description:
      "The authentication module handles user registration, login, and password reset functionality. It uses JWT tokens for maintaining sessions and includes security features like two-factor authentication and session management.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    files: [
      "login/page.tsx",
      "register/page.tsx",
      "reset-password/page.tsx",
    ],
  },
  {
    title: "Dashboard",
    description:
      "The dashboard provides an overview of all user finances including balances across different currencies, recent transactions, and quick access to common actions. It includes charts for visualizing balance distribution and currency performance.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M3 3h18v18H3V3z" strokeWidth="2" />
        <path d="M8 17V9M12 17V5M16 17v-3" strokeWidth="2" />
      </svg>
    ),
    files: [
      "dashboard/page.tsx",
      "components/balance-summary.tsx",
      "components/recent-transactions.tsx",
    ],
  },
  {
    title: "Balances Management",
    description:
      "This module allows users to create and manage balances in different currencies. It includes functionality for viewing balance details, adding new balances, and viewing transaction history for each balance.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 8c-3.333 0-3.333 8 0 8s3.333-8 0-8z" strokeWidth="2" />
        <path d="M6 4h12M6 20h12" strokeWidth="2" />
      </svg>
    ),
    files: [
      "dashboard/balances/page.tsx",
      "components/detailed-balances.tsx",
    ],
  },
  {
    title: "Transfers",
    description:
      "The transfer module enables sending funds to other users with support for different currencies. It handles currency conversion, transaction fees, and provides confirmation with transaction details.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 17l6-6-6-6" strokeWidth="2" />
        <path d="M20 17l-6-6 6-6" strokeWidth="2" />
      </svg>
    ),
    files: ["dashboard/transfer/page.tsx"],
  },
];

const ApplicationComponents = () => {
  return (
    <section className="px-44 py-18 rounded-xl border bg-white dark:bg-gray-900 shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <ArrowLeft className="text-emerald-500" />
        <div>
          <h2 className="text-xl font-semibold">Application Components</h2>
          <p className="text-sm text-muted-foreground">
            Detailed breakdown of each module in FinTrack
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((mod) => (
          <div
            key={mod.title}
            className="rounded-xl border p-4 bg-emerald-50 dark:bg-emerald-900/10"
          >
            <div className="flex gap-3">
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900 h-min">
                {mod.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{mod.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {mod.description}
                </p>
                <div className="bg-emerald-100/60 dark:bg-emerald-800/30 p-3 rounded-md">
                  <p className="text-xs font-semibold mb-1">Key Files:</p>
                  <div className="flex flex-wrap gap-2">
                    {mod.files.map((file) => (
                      <span
                        key={file}
                        className="px-2.5 py-0.5 rounded-full bg-white text-xs font-medium border border-emerald-300 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                      >
                        {file}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-4">
      <h3 className="text-lg font-medium py-4">System Architecture</h3>
      <div className="bg-muted/50 p-6 rounded-lg">
        <div className="grid md:grid-cols-3 gap-4">
          {/* Frontend */}
          <div className="border rounded-lg p-4 bg-background">
            <h4 className="font-medium mb-2 text-emerald-700 dark:text-emerald-400">
              Frontend
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>User Interface Components</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Authentication Handling</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Data Visualization</span>
              </li>
            </ul>
          </div>

          {/* API Layer */}
          <div className="border rounded-lg p-4 bg-background">
            <h4 className="font-medium mb-2 text-emerald-700 dark:text-emerald-400">
              API Layer
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>REST Endpoints</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Authentication & Authorization</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Data Validation</span>
              </li>
            </ul>
          </div>

          {/* Backend Services */}
          <div className="border rounded-lg p-4 bg-background">
            <h4 className="font-medium mb-2 text-emerald-700 dark:text-emerald-400">
              Backend Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Business Logic</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>Database Operations</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>External API Integration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Interactive Dashboard */}
      <div>
        <h3 className="text-xl font-bold mb-4">Interactive Components</h3>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-0">
            <div className="bg-emerald-600 p-4 text-white">
              <h4 className="font-medium">Interactive Dashboard</h4>
            </div>
            <img
              alt="Dashboard example"
              className="w-full h-[300px] object-cover"
              src="/placeholder.svg?height=300&width=500"
            />
            <div className="p-4">
              <p className="text-sm text-muted-foreground">
                The dashboard provides real-time updates of your balances, recent transactions,
                and currency rates in an interactive and visually appealing format.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Experience */}
      <div>
        <h3 className="text-xl font-bold mb-4">Mobile Experience</h3>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-0">
            <div className="bg-emerald-600 p-4 text-white">
              <h4 className="font-medium">Responsive Design</h4>
            </div>
            <img
              alt="Mobile app example"
              className="w-full h-[300px] object-cover"
              src="/placeholder.svg?height=300&width=500"
            />
            <div className="p-4">
              <p className="text-sm text-muted-foreground">
                FinTrack is fully responsive and works seamlessly across desktop, tablet,
                and mobile devices, providing the same powerful functionality regardless of screen size.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex py-8 justify-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-4 px-6 rounded-md  flex items-center gap-2">
            Create Your Account Today
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
    </section>
  );
};

export default ApplicationComponents;
