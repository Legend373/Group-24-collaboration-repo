import { useState } from "react";
import { User, Camera, Info, Phone, MapPin, Banknote } from "lucide-react";

export default function AddFarmer() {
  const [activeTab, setActiveTab] = useState("photo");

  const tabs = [
    { id: "photo", label: "Photo", icon: Camera },
    { id: "basic", label: "Basic Information", icon: Info },
    { id: "contact", label: "Contact & Payment", icon: Phone },
    { id: "farm", label: "Farm Details", icon: User },
    { id: "location", label: "Location", icon: MapPin },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto font-sans space-y-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-[#003501]">Add a Farmer</h1>
      <p className="text-gray-500 text-sm">
        Fill out the farmer’s details below. Make sure the information is correct.
      </p>

      <div className="flex gap-6">
        {/* Sidebar Tabs */}
        <div className="w-56 flex flex-col border border-gray-300 rounded-2xl bg-[#f9f9f9] shadow-xl overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-left flex items-center gap-3 text-sm font-medium transition ${
                activeTab === tab.id
                  ? "text-green-700 bg-green-50 border-l-4 border-green-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <div className="flex-1 bg-[#f9f9f9] border border-gray-300 rounded-2xl shadow-xl p-8 ">
          {activeTab === "photo" && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-[#729a1e]">
                Farmer Photo
              </h2>
              <div className="  bg-gray-100 rounded-2xl p-10 text-center text-gray-500 cursor-pointer hover:bg-gray-200 transition">
                <Camera className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                <p>
                  <span className="text-[#729a1e] font-medium cursor-pointer">
                    Click to upload
                  </span>{" "}
                  or drag and drop a photo (PNG, JPG)
                </p>
              </div>
            </div>
          )}

          {activeTab === "basic" && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-[#729a1e]">
                Basic Information
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-xl p-3 text-sm focus:ring-2 bg-gray-100 focus:ring-[#729a1e] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="National ID Number"
                  className="border rounded-xl p-3 text-sm focus:ring-2  border-gray-300 bg-gray-100 focus:ring-[#729a1e] focus:outline-none"
                />
                <input
                  type="date"
                  className="border rounded-xl p-3 text-sm focus:ring-2 border-gray-300 bg-gray-100 focus:ring-[#729a1e] focus:outline-none"
                />
                <select className="border rounded-xl p-3 text-sm focus:ring-2 border-gray-300 bg-gray-100 focus:ring-[#729a1e] focus:outline-none">
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-[#729a1e]">
                Contact & Payment
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border rounded-xl p-3 text-sm focus:ring-2 border-gray-300 bg-gray-100 focus:ring-[#729a1e] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Alternative Phone"
                  className="border rounded-xl p-3 text-sm focus:ring-2 border-gray-300 bg-gray-100 focus:ring-[#729a1e] focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border rounded-xl p-3 text-sm focus:ring-2 border-gray-300 bg-gray-100 focus:ring-[#729a1e] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="CBE Account Number"
                  className="border rounded-xl p-3 text-sm focus:ring-2 border-gray-300 bg-gray-100 focus:ring-[#729a1e] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Telebirr Number"
                  className="border rounded-xl p-3 text-sm focus:ring-2 border-gray-300 bg-gray-100 focus:ring-[#729a1e] focus:outline-none"
                />
              </div>
            </div>
          )}

          {activeTab === "farm" && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-[#729a1e]">
                Farm Details
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <select className="border rounded-xl p-3 text-sm focus:ring-2 border-gray-300 bg-gray-100 focus:ring-[#729a1e] focus:outline-none">
                  <option>Farm Type</option>
                  <option>Vegetable</option>
                  <option>Grain</option>
                  <option>Livestock</option>
                </select>
                <input
                  type="number"
                  placeholder="Farm Size (Hectares)"
                  className="border rounded-xl p-3 text-sm focus:ring-2 border-gray-300 bg-gray-100 focus:ring-[#729a1e] focus:outline-none"
                />
                <select className="border rounded-xl p-3 text-sm focus:ring-2 border-gray-300 bg-gray-100 focus:ring-[#729a1e] focus:outline-none">
                  <option>Status</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === "location" && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-[#729a1e]">
                Location
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Region"
                  className="border rounded-xl p-3 text-sm focus:ring-2 border-gray-300 bg-gray-100 focus:ring-[#729a1e] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Woreda"
                  className="border rounded-xl p-3 text-sm focus:ring-2 border-gray-300 bg-gray-100 focus:ring-[#729a1e] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Kebele"
                  className="border rounded-xl p-3 text-sm focus:ring-2 border-gray-300 bg-gray-100 focus:ring-[#729a1e] focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button className="px-8 py-3 rounded-xl bg-[#003501] hover:bg-green-700 text-white font-semibold  shadow-lg transition">
          Register Farmer
        </button>
      </div>
    </div>
  );
}
