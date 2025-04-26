"use client";

import { ArrowRight } from "lucide-react"; // ye arrow icon ke liye import kiya hai

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
            {[
              { abbr: "N", title: "Next.js", desc: "React framework for server-side rendering and static site generation" },
              { abbr: "TS", title: "TypeScript", desc: "Type-safe code with improved developer experience" },
              { abbr: "TW", title: "Tailwind CSS", desc: "Utility-first CSS framework for rapid UI development" },
              { abbr: "UI", title: "shadcn/ui", desc: "Accessible and customizable UI components" },
              { abbr: "R", title: "Recharts", desc: "Responsive charts for data visualization" },
            ].map((tech) => (
              <div key={tech.title} className="flex gap-3 items-start">
                <div className="bg-emerald-100 dark:bg-emerald-900/60 p-2 rounded-lg">
                  <span className="text-emerald-600 font-bold">{tech.abbr}</span>
                </div>
                <div>
                  <h4 className="font-medium">{tech.title}</h4>
                  <p className="text-sm text-muted-foreground">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Card */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm border-emerald-100 dark:border-emerald-900/50">
          <div className="flex flex-col space-y-1.5 p-6 bg-violet-600 text-white rounded-t-lg">
            <h2 className="text-2xl font-semibold">Backend Technologies</h2>
            <p className="text-sm opacity-90">Powering the application logic and data</p>
          </div>
          <div className="p-6 space-y-4">
            {[
              { abbr: "F", title: "FastAPI", desc: "Modern, high-performance Python web framework" },
              { abbr: "SQL", title: "SQLAlchemy", desc: "SQL toolkit and ORM for database interactions" },
              { abbr: "PG", title: "PostgreSQL", desc: "Robust relational database" },
              { abbr: "JWT", title: "JWT", desc: "JSON Web Tokens for authentication" },
              { abbr: "D", title: "Docker", desc: "Containerization for consistent deployment" },
            ].map((tech) => (
              <div key={tech.title} className="flex gap-3 items-start">
                <div className="bg-violet-100 dark:bg-violet-900/60 p-2 rounded-lg">
                  <span className="text-violet-600 font-bold">{tech.abbr}</span>
                </div>
                <div>
                  <h4 className="font-medium">{tech.title}</h4>
                  <p className="text-sm text-muted-foreground">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Measures & Open Source Section */}
      <div className="rounded-lg border p-6 space-y-12">
        
        {/* Security Measures */}
        <div>
          <h2 className="text-2xl font-semibold mb-1">Security Measures</h2>
          <p className="text-muted-foreground text-sm mb-6">
            How we protect your data and transactions
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Authentication", desc: "Multi-factor authentication and secure password hashing" },
              { title: "Data Encryption", desc: "End-to-end encryption for all sensitive information" },
              { title: "API Security", desc: "Rate limiting and JWT validation on all endpoints" },
              { title: "Compliance", desc: "Following industry standards for financial data handling" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 border rounded-lg">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <ShieldIcon />
                </div>
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Source Components */}
        <div className="bg-emerald-50 p-6 rounded-lg text-center space-y-4">
          <h2 className="text-2xl font-semibold">Open Source Components</h2>
          <p className="text-muted-foreground text-sm">
            FinTrack leverages the best open-source technologies to provide a robust and scalable platform
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "FastAPI", 
              "PostgreSQL", "SQLAlchemy", "JWT", "Docker"
            ].map((tech) => (
              <span key={tech} className="bg-white border rounded-full px-4 py-1 text-sm font-medium">
                {tech}
              </span>
            ))}
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

// Custom Shield Icon (basic SVG)
function ShieldIcon() {
  return (
    <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l8 4v5c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V7l8-4z" />
    </svg>
  );
}
