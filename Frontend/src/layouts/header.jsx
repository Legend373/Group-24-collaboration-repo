import { Bell, ChevronsLeft, Search } from "lucide-react";
import { useState } from "react";
import { Settings, LogOut } from "lucide-react"; 
import profileImg from "@/assets/profile-image.jpg";

import PropTypes from "prop-types";

import {notifications} from "@/constants/index"

export const Header =({collapsed, setCollapsed})=>{
    const [showNotifications, setShowNotifications] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);

    const accountName ="John ";

    return ( 
        
        <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors">
            <div className="flex items-center gap-x-3">
                <button
                    className="btn-ghost size-10"
                    onClick={() => setCollapsed(!collapsed)}
                >    
                    <ChevronsLeft className={collapsed && "rotate-180"} /> {/* icon */}
                </button>
                <div className="input">
                    <Search
                        size={20}
                        className="text-[#003501]"
                    />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search..."
                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300"
                    />
                </div>
            </div>
            <div className="flex items-center gap-x-4">

                
                <div className="relative">
                    <button 
                        className="btn-ghost size-10"
                        onClick={()=>setShowNotifications((prev)=>!prev)}>
                    <Bell size={20} />
                     {notifications.some((n) => n.status === "new") && (
                        <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-red-500 border-2 border-white"></span>
                     )}
                    </button>

                    {showNotifications && (
                        <div className="absolute right-0 mt-2 w-80 rounded-xl bg-white shadow-lg border border-gray-200">
                            <div className="p-3 border-b border-gray-300 font-semibold text-black">
                            Notifications
                            </div>

                            {/* Scrollable notification list */}
                            <ul className="max-h-60 overflow-y-auto">
                            {notifications.map((n) => (
                               <li
                                    key={n.id}
                                    className="flex items-start gap-3 m-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                                    >
                                    {/* Profile Image */}
                                    <div className="relative">
                                        <img
                                            src={n.image}
                                            alt={n.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        {/* Status dot in corner */}
                                        <span
                                            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                                            n.status === "new" ? "bg-green-500" : "bg-red-500"
                                            }`}
                                        ></span>
                                        </div>

                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                        <span className="font-semibold text-gray-800">{n.name}</span>
                                        <span className="text-xs text-gray-400">{n.time}</span>
                                        </div>
                                        <p className="text-sm text-gray-600">{n.message}</p>
                                    </div>

                        
                                    </li>

                            ))}
                            </ul>

                            {/* View all button */}
                            <div className="p-3">
                            <button className="w-full py-2 border border-gray-300 text-sm font-medium  bg-gray-80 rounded-lg hover:text-white hover:bg-[#003501] ">
                                View all notifications
                            </button>
                            </div>
                        </div>
                        )}


                </div>

                <div className="relative">
                    <div className="flex gap-x-2">
                        <button
                        className="size-10 flex items-center gap-2 overflow-hidden rounded-full"
                        onClick={() => setShowAccountMenu((prev) => !prev)}
                    >
                        <img
                        src={profileImg}
                        alt="profile image"
                        className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="font-medium text-gray-800">{accountName}</span>
                        </button>

                        <p className="p-2 ">John</p>


                    </div>
                    
                    

                    {showAccountMenu && (
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200">
                        
                        {/* Header: Full name + Email */}
                        <div className="p-3 border-b border-gray-300 flex flex-col">
                            <span className="font-semibold text-gray-800">{accountName}</span>
                            <span className="text-xs text-gray-500">john@example.com</span>
                        </div>

                        {/* List items with Lucide icons */}
                        <ul className="p-2">
                            <li className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:rounded cursor-pointer">
                            <Settings size={16} />
                            Account Settings
                            </li>
                            <li className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:rounded cursor-pointer">
                            <LogOut size={16} />
                            Logout
                            </li>
                        </ul>
                        </div>
                    )}
                    </div>
                       

                
            </div>
        </header>
    )

};





Header.PropTypes = {
    collapsed: PropTypes.bool,
    setCollapsed: PropTypes.func,
};