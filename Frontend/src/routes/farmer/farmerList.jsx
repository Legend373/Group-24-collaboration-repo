import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Banknote,
  MessageCircle,
  MessageSquare,
  Search,
} from "lucide-react";
import profileImage from "@/assets/profile-Image1.jpg";
import profileImage1 from "@/assets/profile-Image2.jpg";
import profileImage2 from "@/assets/profile-Image3.jpg";
import profileImage3 from "@/assets/profile-Image4.jpg";
import profileImage4 from "@/assets/profile-Image5.jpg";

const farmersData = [
  {
    id: 1,
    name: "Abebe Kebede",
    photo: profileImage,
    farmType: "Vegetable",
    farmSize: "3 hectares",
    region: "Addis Ababa",
    woreda: "Bole",
    kebele: "05",
    phone: "+251912345678",
    email: "abebe@example.com",
    cbeAccount: "1000123456789",
    telebirr: "0911223344",
    status: "Active",
    description:
      "Experienced farmer specializing in vegetable production. Supplying fresh produce to Addis Ababa markets.",
  },
  {
    id: 2,
    name: "Almaz Tesfaye",
    photo: profileImage1,
    farmType: "Grain",
    farmSize: "7 hectares",
    region: "Addis Ababa",
    woreda: "Yeka",
    kebele: "12",
    phone: "+251934567890",
    email: "almaz@example.com",
    cbeAccount: "1000987654321",
    telebirr: "0933221100",
    status: "Active",
    description:
      "Focused on grain farming with sustainable methods. Supplies grain to cooperatives and bakeries.",
  },
  {
    id: 3,
    name: "Gammachu Badhasa",
    photo: profileImage2,
    farmType: "Dairy",
    farmSize: "15 cows",
    region: "Adama (near Addis)",
    woreda: "Adama",
    kebele: "02",
    phone: "+251911223344",
    email: "gammachu@example.com",
    cbeAccount: "1000456723891",
    telebirr: "0911998877",
    status: "Active",
    description:
      "Dairy farmer producing fresh milk and milk products distributed in Addis Ababa.",
  },
  {
    id: 4,
    name: "Sara Bekele",
    photo: profileImage3,
    farmType: "Poultry",
    farmSize: "500 chickens",
    region: "Sebeta (near Addis)",
    woreda: "Sebeta",
    kebele: "08",
    phone: "+251977665544",
    email: "sara@example.com",
    cbeAccount: "1000789456123",
    telebirr: "0944556677",
    status: "Active",
    description:
      "Specialized in poultry farming. Supplies eggs and chicken meat to Addis Ababa markets.",
  },
  {
    id: 5,
    name: "Mulugeta Dagne",
    photo: profileImage4,
    farmType: "Fruit",
    farmSize: "4 hectares",
    region: "Bishoftu (near Addis)",
    woreda: "Bishoftu",
    kebele: "03",
    phone: "+251922334455",
    email: "mulugeta@example.com",
    cbeAccount: "1000332211445",
    telebirr: "0922113344",
    status: "Active",
    description:
      "Fruit farmer growing oranges, mangoes, and avocados for Addis Ababa supermarkets.",
  },
];

const farmTypes = ["All", "Vegetable", "Grain", "Dairy", "Poultry", "Fruit"];
const regions = [
  "All",
  "Addis Ababa",
  "Adama (near Addis)",
  "Sebeta (near Addis)",
  "Bishoftu (near Addis)",
];

export default function FarmersList() {
  const [search, setSearch] = useState("");
  const [farmTypeFilter, setFarmTypeFilter] = useState("All");
  const [regionFilter, setRegionFilter] = useState("All");

  const filteredFarmers = farmersData.filter((farmer) => {
    const matchesSearch = farmer.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFarmType =
      farmTypeFilter === "All" || farmer.farmType === farmTypeFilter;
    const matchesRegion =
      regionFilter === "All" || farmer.region === regionFilter;

    return matchesSearch && matchesFarmType && matchesRegion;
  });

  return (
    <div className="p-8 max-w-5xl mx-auto font-sans space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-[#003501]">Farmers List</h1>
        <p className="text-gray-500 text-sm">
          Registered farmers from Addis Ababa and nearby cities
        </p>
      </div>

      {/* Filters */}
        <div className="bg-[#f9f9f9] p-4 rounded-xl shadow-xl border border-gray-300 flex flex-col md:flex-row md:items-center gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search farmer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 bg-gray-100 focus:ring-[#729a1e]"
            />
          </div>

          {/* Farm Type Filter */}
          <select
            value={farmTypeFilter}
            onChange={(e) => setFarmTypeFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 bg-gray-100 focus:ring-[#729a1e]"
          >
            {farmTypes.map((type) => (
              <option key={type} value={type}>
                {type} Farms
              </option>
            ))}
          </select>

          {/* Region Filter */}
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-xl text-sm  focus:outline-none focus:ring-2 bg-gray-100 focus:ring-[#729a1e]"
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>

          {/* Filter Button */}
          <button className="px-5 py-2 border rounded-xl text-sm font-medium hover:bg-gray-50">
            Filter
          </button>
        </div>

      {/* Farmer List */}
      <div className="space-y-6">
        {filteredFarmers.map((farmer) => (
          <div
            key={farmer.id}
            className="bg-[#f9f9f9] border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition p-6 flex gap-6"
          >
            {/* Farmer Photo */}
            <img
              src={farmer.photo}
              alt={farmer.name}
              className="w-20 h-20 rounded-full object-cover border"
            />

            {/* Farmer Details */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {farmer.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {farmer.farmType} • {farmer.farmSize}
                  </p>
                </div>
                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  {farmer.status}
                </span>
              </div>

              {/* Contact Info */}
              <div className="mt-2 text-sm text-gray-600 space-y-1">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-green-600" /> {farmer.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-green-600" /> {farmer.email}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-600" /> {farmer.region},{" "}
                  {farmer.woreda}, Kebele {farmer.kebele}
                </p>
                <p className="flex items-center gap-2">
                  <Banknote className="w-4 h-4 text-green-600" /> CBE:{" "}
                  {farmer.cbeAccount} • Telebirr: {farmer.telebirr}
                </p>
              </div>

              {/* Description */}
              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                {farmer.description}
              </p>

              {/* Actions */}
              <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 text-sm border border-red-800 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-red-800" /> Public Comment
                </button>
                <button className="px-4 py-2 text-sm border border-green-700 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-green-700" /> Direct Message
                </button>
              </div>
            </div>
          </div>
        ))}
        {filteredFarmers.length === 0 && (
          <p className="text-gray-500 text-center text-sm">
            No farmers found with the selected filters.
          </p>
        )}
      </div>
    </div>
  );
}
