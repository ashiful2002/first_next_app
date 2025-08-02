import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="grid grid-cols-12">
        {/* Sidebar */}
        <aside className="col-span-3 bg-base-100 shadow-lg min-h-screen p-6">
          <h2 className="text-2xl font-bold mb-6 text-primary">Dashboard</h2>
          <ul className="menu space-y-2">
            <li>
              <Link href="/user-dashboard/userProfile" className="btn btn-ghost justify-start">
                👤 User Profile
              </Link>
            </li>
            <li>
              <Link href="/dashboard/products" className="btn btn-ghost justify-start">
                📦 Products
              </Link>
            </li>
            <li>
              <Link href="/dashboard/orders" className="btn btn-ghost justify-start">
                🧾 Orders
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="col-span-9 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
