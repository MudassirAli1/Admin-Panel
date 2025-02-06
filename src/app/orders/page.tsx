"use client";
import { useState } from "react";
import Image from "next/image";
import item1 from "../../../public/assets/products/product1.png";
import item2 from "../../../public/assets/products/product2.png";
import item3 from "../../../public/assets/products/product3.png";
import Header from "../Headerfooter/header";
import Footer from "../Headerfooter/footer";

const OrdersPage = () => {
  // Dummy order data
  const [orders] = useState([
    {
      id: "1",
      productImage: item1,
      productName: "Nike Air Max",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      address: "1234 Main St, Springfield, IL",
      phone: "+1234567890",
      postalCode: "62701",
      pan: "ABCDE1234F",
      price: 100.0,
      totalAmount: 199.99,
      orderDate: "2025-02-05",
    },
    {
      id: "2",
      productImage: item2,
      productName: "Nike Running Shoes",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      address: "5678 Oak Rd, Chicago, IL",
      phone: "+1987654321",
      postalCode: "60601",
      pan: "XYZFG5678X",
      price: 50.0,
      totalAmount: 89.99,
      orderDate: "2025-02-04",
    },
    {
      id: "3",
      productImage: item3,
      productName: "Nike Hoodie",
      firstName: "Alice",
      lastName: "Johnson",
      email: "alice@example.com",
      address: "91011 Pine Ave, New York, NY",
      phone: "+1122334455",
      postalCode: "10001",
      pan: "LMNOP4567Z",
      price: 70.0,
      totalAmount: 120.50,
      orderDate: "2025-02-03",
    },
  ]);

  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Orders</h2>
        <div className="overflow-x-auto shadow-xl rounded-lg">
          <table className="min-w-full table-auto bg-white text-left">
            <thead className="bg-black text-white">
              <tr>
                <th className="py-3 px-6">Product Image</th>
                <th className="py-3 px-6">Product Name</th>
                <th className="py-3 px-6">Customer Name</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Phone</th>
                <th className="py-3 px-6">Total Amount</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Postal Code</th>
                <th className="py-3 px-6">PAN</th>
                <th className="py-3 px-6">Order Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-6">
                    <Image
                      src={order.productImage}
                      alt={order.productName}
                      width={64}
                      height={64}
                      className="object-cover rounded"
                    />
                  </td>
                  <td className="py-3 px-6 text-black">{order.productName}</td>
                  <td className="py-3 px-6 text-black">
                    {order.firstName} {order.lastName}
                  </td>
                  <td className="py-3 px-6 text-black">${order.price.toFixed(2)}</td>
                  <td className="py-3 px-6 text-black">{order.phone}</td>
                  <td className="py-3 px-6 text-black">${order.totalAmount.toFixed(2)}</td>
                  <td className="py-3 px-6 text-black">{order.email}</td>
                  <td className="py-3 px-6 text-black">{order.postalCode}</td>
                  <td className="py-3 px-6 text-black">{order.pan}</td>
                  <td className="py-3 px-6 text-black">{order.orderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrdersPage;
