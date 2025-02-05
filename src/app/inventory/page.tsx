"use client";
import { useState } from "react";

interface InventoryItem {
  title: string;
  productName: string;
  category: string;
  color: string;
  price: number;
  stock: number;
}

const InventoryManagement = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([
    { title: "Best Seller", productName: "Nike Air Max", category: "Shoes", color: "Black", price: 150, stock: 20 },
    { title: "New Arrival", productName: "Nike Hoodie", category: "Clothing", color: "Gray", price: 70, stock: 50 },
  ]);

  const [newItem, setNewItem] = useState<InventoryItem>({
    title: "",
    productName: "",
    category: "",
    color: "",
    price: 0,
    stock: 0,
  });

  const updateNewItem = (field: "price" | "stock", change: number) => {
    setNewItem((prev) => ({
      ...prev,
      [field]: Math.max(0, prev[field] + change),
    }));
  };

  const addItem = () => {
    if (!newItem.title || !newItem.productName || !newItem.category || !newItem.color || newItem.price <= 0 || newItem.stock <= 0) {
      alert("Please fill in all fields correctly.");
      return;
    }

    setInventory([...inventory, newItem]);
    setNewItem({ title: "", productName: "", category: "", color: "", price: 0, stock: 0 });
  };

  const deleteItem = (index: number) => {
    setInventory(inventory.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-black">Inventory Management</h2>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-2xl font-semibold mb-4 text-black">Add New Product</h3>
        <div className="grid grid-cols-2 gap-4">
        <div>
            <label className="block text-black font-semibold mb-1">Product Name</label>
            <input
              type="text"
              placeholder="Enter product name"
              value={newItem.productName}
              onChange={(e) => setNewItem({ ...newItem, productName: e.target.value })}
              className="p-2 border rounded-lg w-full text-black"
            />
          </div> 
          {/* Title Input */}
          <div>
            <label className="block text-black font-semibold mb-1">Title</label>
            <input
              type="text"
              placeholder="Enter product title"
              value={newItem.title}
              onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
              className="p-2 border rounded-lg w-full text-black"
            />
          </div>
          
          <div>
            <label className="block text-black font-semibold mb-1">Category</label>
            <input
              type="text"
              placeholder="Enter category"
              value={newItem.category}
              onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
              className="p-2 border rounded-lg w-full text-black"
            />
          </div>
          <div>
            <label className="block text-black font-semibold mb-1">Color</label>
            <input
              type="text"
              placeholder="Enter color"
              value={newItem.color}
              onChange={(e) => setNewItem({ ...newItem, color: e.target.value })}
              className="p-2 border rounded-lg w-full text-black"
            />
          </div>

          <div>
            <label className="block text-black font-semibold mb-1">Price</label>
            <div className="flex items-center space-x-2">
              <button onClick={() => updateNewItem("price", -5)} className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition">-</button>
              <input
                type="number"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: Number(e.target.value) })}
                className="p-2 border rounded-lg w-full text-black text-center"
              />
              <button onClick={() => updateNewItem("price", 5)} className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-700 transition">+</button>
            </div>
          </div>

          <div>
            <label className="block text-black font-semibold mb-1">Stock Quantity</label>
            <div className="flex items-center space-x-2">
              <button onClick={() => updateNewItem("stock", -1)} className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition">-</button>
              <input
                type="number"
                value={newItem.stock}
                onChange={(e) => setNewItem({ ...newItem, stock: Number(e.target.value) })}
                className="p-2 border rounded-lg w-full text-black text-center"
              />
              <button onClick={() => updateNewItem("stock", 1)} className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-700 transition">+</button>
            </div>
          </div>
        </div>
        <button onClick={addItem} className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition">
          Add Product
        </button>
      </div>

      <div className="overflow-x-auto shadow-xl rounded-lg">
        <table className="min-w-full table-auto bg-white text-left">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6">Title</th>
              <th className="py-3 px-6">Product Name</th>
              <th className="py-3 px-6">Category</th>
              <th className="py-3 px-6">Color</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Stock</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="py-3 px-6 text-black">{item.title}</td>
                <td className="py-3 px-6 text-black">{item.productName}</td>
                <td className="py-3 px-6 text-black">{item.category}</td>
                <td className="py-3 px-6 text-black">{item.color}</td>
                <td className="py-3 px-6 text-black">${item.price.toFixed(2)}</td>
                <td className="py-3 px-6 text-black">{item.stock}</td>
                <td className="py-3 px-6 text-center">
                  <button onClick={() => deleteItem(index)} className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryManagement;
