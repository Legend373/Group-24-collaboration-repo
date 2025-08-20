import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function YegnaFarmOrders() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchId, setSearchId] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const [orders, setOrders] = useState([
    {
      id: 1,
      buyer: "John Doe",
      profile: "https://i.pravatar.cc/40?img=1",
      address: "Addis Ababa, Ethiopia",
      product: "Organic Wheat",
      date: "2025-08-10",
      price: "$250",
      status: "pending",
      transactionId: "TXN12345",
      estimatedShipping: "2025-08-15",
      payment: "Credit Card",
    },
    {
      id: 2,
      buyer: "Jane Smith",
      profile: "https://i.pravatar.cc/40?img=2",
      address: "Bahir Dar, Ethiopia",
      product: "Coffee Beans",
      date: "2025-08-11",
      price: "$500",
      status: "completed",
      transactionId: "TXN67890",
      estimatedShipping: "2025-08-17",
      payment: "PayPal",
    },
    {
      id: 3,
      buyer: "Mark Lee",
      profile: "https://i.pravatar.cc/40?img=3",
      address: "Hawassa, Ethiopia",
      product: "Avocado Crate",
      date: "2025-08-12",
      price: "$120",
      status: "rejected",
      transactionId: "TXN54321",
      estimatedShipping: "2025-08-18",
      payment: "Bank Transfer",
    },
    {
      id: 4,
      buyer: "John Doe",
      profile: "https://i.pravatar.cc/40?img=1",
      address: "Addis Ababa, Ethiopia",
      product: "Organic Wheat",
      date: "2025-08-10",
      price: "$250",
      status: "pending",
      transactionId: "TXN12345",
      estimatedShipping: "2025-08-15",
      payment: "Credit Card",
    },
    {
      id: 5,
      buyer: "John Doe",
      profile: "https://i.pravatar.cc/40?img=1",
      address: "Addis Ababa, Ethiopia",
      product: "Organic Wheat",
      date: "2025-08-10",
      price: "$250",
      status: "pending",
      transactionId: "TXN12345",
      estimatedShipping: "2025-08-15",
      payment: "Credit Card",
    },
    {
      id: 6,
      buyer: "John Doe",
      profile: "https://i.pravatar.cc/40?img=1",
      address: "Addis Ababa, Ethiopia",
      product: "Organic Wheat",
      date: "2025-08-10",
      price: "$250",
      status: "pending",
      transactionId: "TXN12345",
      estimatedShipping: "2025-08-15",
      payment: "Credit Card",
    },
    {
      id: 7,
      buyer: "John Doe",
      profile: "https://i.pravatar.cc/40?img=1",
      address: "Addis Ababa, Ethiopia",
      product: "Organic Wheat",
      date: "2025-08-10",
      price: "$250",
      status: "pending",
      transactionId: "TXN12345",
      estimatedShipping: "2025-08-15",
      payment: "Credit Card",
    },
  ]);

  const filteredOrders = orders
    .filter((order) => activeTab === "all" || order.status === activeTab)
    .filter((order) =>
      statusFilter === "all" ? true : order.status === statusFilter
    )
    .filter(
      (order) =>
        searchId === "" ||
        order.buyer.toLowerCase().includes(searchId.toLowerCase()) ||
        order.id.toString().includes(searchId)
    );

  const totalPages = Math.ceil(filteredOrders.length / rowsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  return (
    <div className="p-6 min-h-screen flex flex-col lg:flex-row gap-6">
      <div className="flex-1 flex flex-col gap-4">
        
        <h1 className="text-2xl font-bold">Orders</h1>

        {/* Search & Filter */}
        <div className="bg-[#f9f9f9] shadow-md rounded-2xl border border-gray-300 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              placeholder=" Search by Buyer or ID..."
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="border border-gray-300 rounded-lg focus:ring-2 bg-gray-100 focus:ring-[#729a1e] p-2 focus:outline-none"
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:ring-2 bg-gray-100 focus:ring-[#729a1e] text-sm"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="completed">Completed</option>
              <option value="rejected">Rejected</option>
            </select>
            <button className="bg-gray-200 px-3 py-2 rounded-lg hover:bg-gray-300 text-sm">
              Filter
            </button>
          </div>
        </div>

        {/* Orders List */}
        <div className="bg-[#f9f9f9] shadow-md rounded-2xl border border-gray-300 overflow-hidden flex flex-col">
          <div className="grid grid-cols-6 bg-gray-100 font-semibold text-[#729a1e] px-4 py-2">
            <span>ID</span>
            <span>Buyer</span>
            <span>Address</span>
            <span>Date</span>
            <span>Price</span>
            <span>Status</span>
          </div>

          <div className="overflow-y-auto max-h-[500px]">
            {paginatedOrders.map((order) => (
              <div
                key={order.id}
                className="grid grid-cols-6 items-center border-b border-gray-300 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setSelectedOrder(order)}
              >
                <span className="text-sm">{order.id}</span>
                <div className="flex items-center gap-0"> {/*Reduced gap */}
                  <img
                    src={order.profile}
                    alt={order.buyer}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-medium text-sm ml-1">{order.buyer}</span>
                </div>
                <span className="truncate text-sm">{order.address}</span>
                <span className="text-sm">{order.date}</span>
                <span className="font-semibold text-sm">{order.price}</span>
                <span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      order.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : order.status === "approved"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* 🔥 Pagination */}
          <div className="flex justify-between items-center px-4 py-3 border-t text-sm">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="flex items-center gap-1 text-gray-600 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <span className="text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="flex items-center gap-1 text-gray-600 disabled:opacity-50"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 Order Details Sidebar */}
      {selectedOrder && (
        <div className="relative w-full h-[30rem] mt-12 lg:w-96 bg-[#f9f9f9] border border-gray-300 shadow-md rounded-2xl p-6 flex-shrink-0">
          <button
            onClick={() => setSelectedOrder(null)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-xl font-bold mb-4">Order Details</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <img
                src={selectedOrder.profile}
                alt={selectedOrder.buyer}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{selectedOrder.buyer}</p>
                <p className="text-gray-500">{selectedOrder.address}</p>
              </div>
            </div>
            <p>
              <span className="font-semibold">Product:</span>{" "}
              {selectedOrder.product}
            </p>
            <p>
              <span className="font-semibold">Date:</span> {selectedOrder.date}
            </p>
            <p>
              <span className="font-semibold">Price:</span>{" "}
              {selectedOrder.price}
            </p>
            <p>
              <span className="font-semibold">Transaction ID:</span>{" "}
              {selectedOrder.transactionId}
            </p>
            <p>
              <span className="font-semibold">Payment:</span>{" "}
              {selectedOrder.payment}
            </p>
            <p>
              <span className="font-semibold">Status:</span>{" "}
              {selectedOrder.status}
            </p>
            <p>
              <span className="font-semibold">Estimated Shipping:</span>{" "}
              {selectedOrder.estimatedShipping}
            </p>

            {/* 🔥 Action Buttons */}
            <div className="flex gap-3 mt-4">
              {selectedOrder.status === "pending" && (
                <>
                  <button
                    onClick={() =>
                      updateOrderStatus(selectedOrder.id, "approved")
                    }
                    className="bg-[#063d11] text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() =>
                      updateOrderStatus(selectedOrder.id, "rejected")
                    }
                    className="bg-red-900 text-white px-5 py-2 rounded-lg text-sm"
                  >
                    Reject
                  </button>
                </>
              )}

              {selectedOrder.status === "approved" && (
                <button
                  onClick={() =>
                    updateOrderStatus(selectedOrder.id, "completed")
                  }
                  className="bg-blue-900 text-white px-5 py-2 rounded-lg text-sm"
                >
                  Complete
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
