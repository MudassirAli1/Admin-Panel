"use client";
import { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client"; // Assuming you're using Sanity

interface DashboardStats {
  totalInventory: number;
  totalPrice: number;
  totalSales: number;
  totalOrders: number;
  totalCustomers: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);

  useEffect(() => {
    // Fetch data from your API or Sanity or any other backend
    client
      .fetch(`
        {
          "totalInventory": count(*[_type == "product"]),
          "totalPrice": sum(*[_type == "product"].price),
          "totalSales": sum(*[_type == "order"].total),
          "totalOrders": count(*[_type == "order"]),
          "totalCustomers": count(*[_type == "customer"])
        }
      `)
      .then((data) => setStats(data))
      .catch((error) => console.log("Error fetching dashboard data", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Inventory */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-black">
          <h3 className="text-xl font-semibold text-black">Total Inventory</h3>
          <p className="text-3xl font-bold text-black">{stats?.totalInventory ?? 0}</p>
        </div>

        {/* Total Price */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-black">
          <h3 className="text-xl font-semibold text-black">Total Price of Products</h3>
          <p className="text-3xl font-bold text-black">{stats?.totalPrice ?? 0}</p>
        </div>

        {/* Total Sales */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-black">
          <h3 className="text-xl font-semibold text-black">Total Sales</h3>
          <p className="text-3xl font-bold text-black">{stats?.totalSales ?? 0}</p>
        </div>

        {/* Total Orders */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-black">
          <h3 className="text-xl font-semibold text-black">Total Orders</h3>
          <p className="text-3xl font-bold text-black">{stats?.totalOrders ?? 0}</p>
        </div>

        {/* Total Customers */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-black">
          <h3 className="text-xl font-semibold text-black">Total Customers</h3>
          <p className="text-3xl font-bold text-black">{stats?.totalCustomers ?? 0}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
