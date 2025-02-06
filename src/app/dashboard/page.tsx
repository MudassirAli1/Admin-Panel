"use client";
import { useEffect, useState } from "react";

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
    // Simulating fetching data with simplified single-digit dummy data
    const dummyData: DashboardStats = {
      totalInventory: 5,        // Only 5 products in inventory
      totalPrice: 9000,          // Total price of products is $120
      totalSales: 12000,            // Sales will be calculated based on total price
      totalOrders: 3,           // Only 3 orders
      totalCustomers: 2,        // Only 2 customers
    };

    // Calculate Total Sales as 70% of Total Price of Products
    dummyData.totalSales = Math.round(dummyData.totalPrice * 0.7);

    // Simulating an API call delay using setTimeout
    setTimeout(() => {
      setStats(dummyData);
    }, 1000);
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
          <p className="text-3xl font-bold text-black">MRP: ₹{stats?.totalPrice ?? 0}</p>
        </div>

        {/* Total Sales */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-black">
          <h3 className="text-xl font-semibold text-black">Total Sales</h3>
          <p className="text-3xl font-bold text-black">MRP: ₹{stats?.totalSales ?? 0}</p>
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
