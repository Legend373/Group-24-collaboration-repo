import { useState } from "react";
import image from "@/assets/tomato.jpg";
import image1 from "@/assets/potato.jpg";
import image2 from "@/assets/wheat.jpg";
import image3 from "@/assets/chili.jpg";
import image4 from "@/assets/rise.jpg";
import image5 from "@/assets/onion.jpg";
import image6 from "@/assets/carrot.jpg";

import { Search, Upload, Download, Plus, Pencil, Trash2 } from "lucide-react";

export default function ProductsList() {
  const [products] = useState([
    { id: 1, name: "Tomatoes", category: "Vegetable", stock: "124", price: "ETB 47", status: "Published", image },
    { id: 2, name: "Potato", category: "Vegetable", stock: "Out of Stock", price: "ETB 120", status: "Draft", image: image1 },
    { id: 3, name: "Wheat Grain", category: "Grain", stock: "In Stock", price: "ETB 65", status: "Published", image: image2 },
    { id: 4, name: "Chili", category: "Vegetable", stock: "In Stock", price: "ETB 65", status: "Published", image: image3 },
    { id: 5, name: "Rise", category: "Grain", stock: "In Stock", price: "ETB 65", status: "Draft", image: image4 },
    { id: 6, name: "Onion", category: "Vegetable", stock: "In Stock", price: "ETB 65", status: "Published", image: image5 },
    { id: 7, name: "Carrot", category: "Vegetable", stock: "In Stock", price: "ETB 65", status: "Published", image: image6 },
  ]);

  const statusColors = {
    Published: "bg-green-100 text-green-700",
    Draft: "bg-gray-100 text-gray-600",
    Inactive: "bg-red-100 text-red-700",
    "Out of Stock": "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="p-6 max-w-7xl mx-auto font-sans space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#003501]">Products List</h1>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 bg-gray-100 hover:bg-gray-50 transition text-sm font-medium">
            <Upload className="w-4 h-4" /> Import
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 bg-gray-100 hover:bg-gray-50 transition text-sm font-medium">
            <Download className="w-4 h-4" /> Export
          </button>
          <button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#003501] hover:bg-green-700 text-white font-medium shadow-md transition text-sm">
            <Plus className="w-4 h-4" /> Add Product
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search product..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-[#729a1e] focus:outline-none text-sm"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        </div>
        <select className="border border-gray-300 rounded-xl px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-[#729a1e] text-sm">
          <option>Status</option>
          <option>Published</option>
          <option>Draft</option>
          <option>Inactive</option>
        </select>
        <select className="border border-gray-300 rounded-xl px-3 py-2 bg-gray-50 focus:ring-2 focus:ring-[#729a1e] text-sm">
          <option>Category</option>
          <option>Vegetable</option>
          <option>Fruit</option>
          <option>Grain</option>
        </select>
        <button className="px-4 py-2 rounded-xl border border-gray-300 bg-gray-100 hover:bg-gray-50 text-sm font-medium">
          Filter
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
        <div className="max-h-[500px] overflow-y-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-[#729a1e]">Product Name</th>
                <th className="px-6 py-3 text-[#729a1e]">Category</th>
                <th className="px-6 py-3 text-[#729a1e]">Stock</th>
                <th className="px-6 py-3 text-[#729a1e]">Price</th>
                <th className="px-6 py-3 text-[#729a1e]">Status</th>
                <th className="px-6 py-3 text-right ">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-12 h-12 rounded-lg object-cover border"
                    />
                    <span className="font-medium">{p.name}</span>
                  </td>
                  <td className="px-6 py-4">{p.category}</td>
                  <td
                    className={`px-6 py-4 ${
                      p.stock === "Out of Stock"
                        ? "text-red-600 font-medium"
                        : p.stock === "Low Stock"
                        ? "text-yellow-600 font-medium"
                        : ""
                    }`}
                  >
                    {p.stock}
                  </td>
                  <td className="px-6 py-4">{p.price}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        statusColors[p.status] || "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right flex justify-end gap-2">
                    <button className="flex items-center gap-1 px-3 py-1 text-xs rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition">
                      <Pencil className="w-4 h-4" /> Edit
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1 text-xs rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition">
                      <Trash2 className="w-4 h-4" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 text-sm">
        <span className="text-gray-500">Result 1-{products.length} of {products.length}</span>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">Prev</button>
          <button className="px-3 py-1 border rounded-lg bg-[#003501] text-white">1</button>
          <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">2</button>
          <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">3</button>
          <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  );
}
