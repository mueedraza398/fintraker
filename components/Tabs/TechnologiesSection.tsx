"use client";

import { ArrowRight } from "lucide-react";

export default function TechnologiesAndSecurity() {
  return (
    <div className="space-y-12 md:px-44">

      {/* Frontend & Backend Technologies Section */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Frontend Card */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-emerald-100 dark:border-emerald-900/50">
          <div className="flex flex-col space-y-1.5 p-6 bg-emerald-600 text-white rounded-t-lg">
            <h2 className="text-2xl font-semibold">Frontend Technologies</h2>
            <p className="text-sm opacity-90">Building a responsive and performant UI</p>
          </div>
          <div className="p-6 space-y-4">
            {/* Next.js */}
            <div className="flex gap-3 items-start">
              <div className="bg-emerald-100 dark:bg-emerald-900/60 p-2 rounded-lg">
                <span className="text-emerald-600 font-bold">N</span>
              </div>
              <div>
                <h4 className="font-medium">Next.js</h4>
                <p className="text-sm text-muted-foreground">
                  React framework for server-side rendering and static site generation
                </p>
              </div>
            </div>
            {/* TypeScript */}
            <div className="flex gap-3 items-start">
              <div className="bg-emerald-100 dark:bg-emerald-900/60 p-2 rounded-lg">
                <span className="text-emerald-600 font-bold">TS</span>
              </div>
              <div>
                <h4 className="font-medium">TypeScript</h4>
                <p className="text-sm text-muted-foreground">
                  Type-safe code with improved developer experience
                </p>
              </div>
            </div>
            {/* Tailwind CSS */}
            <div className="flex gap-3 items-start">
              <div className="bg-emerald-100 dark:bg-emerald-900/60 p-2 rounded-lg">
                <span className="text-emerald-600 font-bold">TW</span>
              </div>
              <div>
                <h4 className="font-medium">Tailwind CSS</h4>
                <p className="text-sm text-muted-foreground">
                  Utility-first CSS framework for rapid UI development
                </p>
              </div>
            </div>
            {/* shadcn/ui */}
            <div className="flex gap-3 items-start">
              <div className="bg-emerald-100 dark:bg-emerald-900/60 p-2 rounded-lg">
                <span className="text-emerald-600 font-bold">UI</span>
              </div>
              <div>
                <h4 className="font-medium">shadcn/ui</h4>
                <p className="text-sm text-muted-foreground">
                  Accessible and customizable UI components
                </p>
              </div>
            </div>
            {/* Recharts */}
            <div className="flex gap-3 items-start">
              <div className="bg-emerald-100 dark:bg-emerald-900/60 p-2 rounded-lg">
                <span className="text-emerald-600 font-bold">R</span>
              </div>
              <div>
                <h4 className="font-medium">Recharts</h4>
                <p className="text-sm text-muted-foreground">
                  Responsive charts for data visualization
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Card */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-emerald-100 dark:border-emerald-900/50">
          <div className="flex flex-col space-y-1.5 p-6 bg-violet-600 text-white rounded-t-lg">
            <h2 className="text-2xl font-semibold">Backend Technologies</h2>
            <p className="text-sm opacity-90">Powering the application logic and data</p>
          </div>
          <div className="p-6 space-y-4">
            {/* FastAPI */}
            <div className="flex gap-3 items-start">
              <div className="bg-violet-100 dark:bg-violet-900/60 p-2 rounded-lg">
                <span className="text-violet-600 font-bold">F</span>
              </div>
              <div>
                <h4 className="font-medium">FastAPI</h4>
                <p className="text-sm text-muted-foreground">
                  Modern, high-performance Python web framework
                </p>
              </div>
            </div>
            {/* SQLAlchemy */}
            <div className="flex gap-3 items-start">
              <div className="bg-violet-100 dark:bg-violet-900/60 p-2 rounded-lg">
                <span className="text-violet-600 font-bold">SQL</span>
              </div>
              <div>
                <h4 className="font-medium">SQLAlchemy</h4>
                <p className="text-sm text-muted-foreground">
                  SQL toolkit and ORM for database interactions
                </p>
              </div>
            </div>
            {/* PostgreSQL */}
            <div className="flex gap-3 items-start">
              <div className="bg-violet-100 dark:bg-violet-900/60 p-2 rounded-lg">
                <span className="text-violet-600 font-bold">PG</span>
              </div>
              <div>
                <h4 className="font-medium">PostgreSQL</h4>
                <p className="text-sm text-muted-foreground">
                  Robust relational database
                </p>
              </div>
            </div>
            {/* JWT */}
            <div className="flex gap-3 items-start">
              <div className="bg-violet-100 dark:bg-violet-900/60 p-2 rounded-lg">
                <span className="text-violet-600 font-bold">JWT</span>
              </div>
              <div>
                <h4 className="font-medium">JWT</h4>
                <p className="text-sm text-muted-foreground">
                  JSON Web Tokens for authentication
                </p>
              </div>
            </div>
            {/* Docker */}
            <div className="flex gap-3 items-start">
              <div className="bg-violet-100 dark:bg-violet-900/60 p-2 rounded-lg">
                <span className="text-violet-600 font-bold">D</span>
              </div>
              <div>
                <h4 className="font-medium">Docker</h4>
                <p className="text-sm text-muted-foreground">
                  Containerization for consistent deployment
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Security Measures Section */}
      <div className="rounded-lg border p-6 space-y-12">

        <div>
          <h2 className="text-2xl font-semibold mb-1">Security Measures</h2>
          <p className="text-muted-foreground text-sm mb-6">
            How we protect your data and transactions
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Authentication */}
            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <ShieldIcon />
              </div>
              <div>
                <h4 className="font-medium">Authentication</h4>
                <p className="text-sm text-muted-foreground">
                  Multi-factor authentication and secure password hashing
                </p>
              </div>
            </div>
            {/* Data Encryption */}
            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <ShieldIcon />
              </div>
              <div>
                <h4 className="font-medium">Data Encryption</h4>
                <p className="text-sm text-muted-foreground">
                  End-to-end encryption for all sensitive information
                </p>
              </div>
            </div>
            {/* API Security */}
            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <ShieldIcon />
              </div>
              <div>
                <h4 className="font-medium">API Security</h4>
                <p className="text-sm text-muted-foreground">
                  Rate limiting and JWT validation on all endpoints
                </p>
              </div>
            </div>
            {/* Compliance */}
            <div className="flex items-start gap-3 p-4 border rounded-lg">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <ShieldIcon />
              </div>
              <div>
                <h4 className="font-medium">Compliance</h4>
                <p className="text-sm text-muted-foreground">
                  Following industry standards for financial data handling
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Open Source Section */}
        <div className="bg-emerald-50 p-6 rounded-lg text-center space-y-4">
          <h2 className="text-2xl font-semibold">Open Source Components</h2>
          <p className="text-muted-foreground text-sm">
            FinTrack leverages the best open-source technologies to provide a robust and scalable platform
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {/* Manually listing each tag */}
            <span className="bg-white border rounded-full px-4 py-1 text-sm font-medium">Next.js</span>
            <span className="bg-white border rounded-full px-4 py-1 text-sm font-medium">React</span>
            <span className="bg-white border rounded-full px-4 py-1 text-sm font-medium">TypeScript</span>
            <span className="bg-white border rounded-full px-4 py-1 text-sm font-medium">Tailwind CSS</span>
            <span className="bg-white border rounded-full px-4 py-1 text-sm font-medium">shadcn/ui</span>
            <span className="bg-white border rounded-full px-4 py-1 text-sm font-medium">FastAPI</span>
            <span className="bg-white border rounded-full px-4 py-1 text-sm font-medium">PostgreSQL</span>
            <span className="bg-white border rounded-full px-4 py-1 text-sm font-medium">SQLAlchemy</span>
            <span className="bg-white border rounded-full px-4 py-1 text-sm font-medium">JWT</span>
            <span className="bg-white border rounded-full px-4 py-1 text-sm font-medium">Docker</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-2 px-6 rounded-full flex items-center gap-2">
            Create Your Account Today
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  );
}

// Shield Icon
function ShieldIcon() {
  return (
    <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l8 4v5c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V7l8-4z" />
    </svg>
  );
}
