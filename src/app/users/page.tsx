"use client";
import { useState, useEffect } from "react";

interface CustomerOrder {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

const UserOrderDetails = () => {
  const [orders, setOrders] = useState<CustomerOrder[]>([]);

  // Simulate fetching all user order details (dummy data)
  const fetchAllOrders = () => {
    const fetchedOrders: CustomerOrder[] = [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        address: "123 Main St, Apt 4B",
        city: "Mirpurkhas",
        postalCode: "12345",
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "987-654-3210",
        address: "456 Oak Rd, Apt 2A",
        city: "Karachi",
        postalCode: "54321",
      },
      {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        phone: "555-555-5555",
        address: "789 Pine St, Suite 101",
        city: "Lahore",
        postalCode: "67890",
      },
    ];

    setOrders(fetchedOrders);
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-black">User  Details</h2>

      {orders.length > 0 ? (
        <div className="overflow-x-auto shadow-xl rounded-lg">
          <table className="min-w-full table-auto bg-white text-left">
            <thead className="bg-black text-white">
              <tr>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Phone</th>
                <th className="py-3 px-6">Address</th>
                <th className="py-3 px-6">City</th>
                <th className="py-3 px-6">Postal Code</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-6 text-black">{order.name}</td>
                  <td className="py-3 px-6 text-black">{order.email}</td>
                  <td className="py-3 px-6 text-black">{order.phone}</td>
                  <td className="py-3 px-6 text-black">{order.address}</td>
                  <td className="py-3 px-6 text-black">{order.city}</td>
                  <td className="py-3 px-6 text-black">{order.postalCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-black">No orders found.</p>
      )}
    </div>
  );
};

export default UserOrderDetails;
