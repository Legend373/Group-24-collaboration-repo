import { useState } from "react";
import { Upload } from "lucide-react";

export default function AddProduct() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files.map(file => URL.createObjectURL(file))]);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#003501]">Add New Product</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* General Information */}
        <div className="lg:col-span-2 bg-[#f9f9f9] rounded-2xl shadow-xl p-8 space-y-6 ">
          <h2 className="text-2xl font-bold text-[#729a1e]">General Information</h2>
          <div>
            <label className="block text-sm font-medium  text-gray-600 mb-1">Product Name</label>
            <input type="text" placeholder="e.g. Organic Tomatoes" className="w-full border border-gray-300 bg-gray-100 rounded-xl p-3 focus:ring-2 focus:ring-[#729a1e] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
            <textarea rows={4} placeholder="Write a short description about your product..." className="w-full border border-gray-300   rounded-xl p-3 focus:ring-2 bg-gray-100 focus:ring-[#729a1e] focus:outline-none"></textarea>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Available Quantity</label>
              <input type="number" placeholder="e.g. 100" className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 bg-gray-100 focus:ring-[#729a1e] focus:outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Unit</label>
              <select className="w-full border border-gray-300 rounded-xl p-3  focus:ring-2 bg-gray-100 focus:ring-[#729a1e] focus:outline-none">
                <option value="">Select Unit</option>
                <option value="kg">Kilogram (kg)</option>
                <option value="ton">Ton</option>
                <option value="liter">Liter</option>
                <option value="pcs">Pieces</option>
              </select>
            </div>
          </div>
        </div>

        {/* Upload Images */}
        <div className="bg-[#f9f9f9] rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100">
          <h2 className="text-2xl font-bold text-[#729a1e]">Upload Images</h2>
          <label className=" bg-gray-100 h-60 rounded-xl flex flex-col items-center justify-center p-2 cursor-pointer  transition">
            <Upload className="w-8 h-8 text-gray-600 mb-2" />
            <span className="text-sm text-gray-500">Click or drag & drop to upload</span>
            <input type="file" multiple accept="image/*" onChange={handleImageUpload} className="hidden" />
          </label>
          <div className="grid grid-cols-3 gap-3">
            {images.map((img, idx) => (
              <img key={idx} src={img} alt="preview" className="rounded-lg object-cover h-28 w-full border border-gray-200 shadow-sm" />
            ))}
          </div>
        </div>

        {/* Pricing and Stock */}
        <div className="lg:col-span-2 bg-[#f9f9f9] rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100">
          <h2 className="text-2xl font-bold text-[#729a1e]">Pricing & Stock</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Base Price</label>
              <input type="number" placeholder="ETB 0.00" className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 bg-gray-100 focus:ring-[#729a1e] focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Stock</label>
              <input type="number" placeholder="e.g. 500" className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 bg-gray-100 focus:ring-[#729a1e] focus:outline-none" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Discount</label>
              <input type="number" placeholder="e.g. 10%" className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 bg-gray-100 focus:ring-[#729a1e] focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Discount Type</label>
              <select className="w-full border border-gray-300 rounded-xl p-3  focus:ring-2 bg-gray-100 focus:ring-[#729a1e] focus:outline-none">
                <option value="">Select Discount</option>
                <option value="seasonal">Seasonal Discount</option>
                <option value="bulk">Bulk Order Discount</option>
                <option value="promo">Promotional Discount</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category */}
        <div className="bg-[#f9f9f9] rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100">
          <h2 className="text-2xl font-bold text-[#729a1e]">Category</h2>
          <select className="w-full border border-gray-300 rounded-xl p-3  focus:ring-2 bg-gray-100 focus:ring-[#729a1e] focus:outline-none">
            <option value="">Select Category</option>
            <option value="vegetable">Vegetable</option>
            <option value="fruit">Fruit</option>
            <option value="grain">Grain</option>
            <option value="livestock">Livestock</option>
            <option value="dairy">Dairy</option>
          </select>
          <button className="w-full px-5 py-3 rounded-xl bg-[#003501] hover:bg-green-700 text-white font-medium shadow-md transition">Add Category</button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="lg:col-span-3 flex justify-end gap-4">
        <button className="px-6 py-3 rounded-xl border border-gray-300 bg-gray-100 hover:bg-gray-50 font-medium transition">Save Draft</button>
        <button className="px-6 py-3 rounded-xl bg-[#003501] hover:bg-green-700 text-white font-medium shadow-md transition">Add Product</button>
      </div>
    </div>
  );
}
