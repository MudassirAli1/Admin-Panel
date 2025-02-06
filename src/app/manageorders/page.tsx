"use client";
import { useState } from "react";
import Header from "../Headerfooter/header";
import Footer from "../Headerfooter/footer";

interface Product {
  productName: string;
  price: number;
  quantity: number;
  customerName: string;
  stockStatus: string;
}

const ManageProducts = () => {
  const [products] = useState<Product[]>([
    {
      productName: "Nike Air Max",
      price: 150.0,
      quantity: 20,
      customerName: "John Doe",
      stockStatus: "Available",
    },
    {
      productName: "Nike Running Shoes",
      price: 100.0,
      quantity: 15,
      customerName: "Alice Smith",
      stockStatus: "Available",
    },
    {
      productName: "Nike Hoodie",
      price: 70.0,
      quantity: 0,
      customerName: "David Johnson",
      stockStatus: "Out of Stock",
    },
  ]);

  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Manage Products</h2>
        <div className="overflow-x-auto shadow-xl rounded-lg">
          <table className="min-w-full table-auto bg-white text-left">
            <thead className="bg-black text-white">
              <tr>
                <th className="py-3 px-6">Product Name</th>
                <th className="py-3 px-6">Price</th>
                <th className="py-3 px-6">Quantity</th>
                <th className="py-3 px-6">Customer Name</th>
                <th className="py-3 px-6">Stock Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-6 text-black">{product.productName}</td>
                  <td className="py-3 px-6 text-black">${product.price.toFixed(2)}</td>
                  <td className="py-3 px-6 text-black">{product.quantity}</td>
                  <td className="py-3 px-6 text-black">{product.customerName}</td>
                  <td className={`py-3 px-6 font-semibold ${product.stockStatus === "Out of Stock" ? "text-red-500" : "text-green-500"}`}>
                    {product.stockStatus}
                  </td>
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

export default ManageProducts;
