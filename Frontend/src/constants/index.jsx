import { ChartColumn, Home, NotepadText,ShoppingCart, Truck, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPlus, Users } from "lucide-react";

import ProfileImage from "@/assets/profile-image.jpg";
import ProfileImage1 from "@/assets/profile-image1.jpg";
import ProfileImage2 from "@/assets/profile-image2.jpg";
import ProfileImage3 from "@/assets/profile-image3.jpg";
import ProfileImage4 from "@/assets/profile-image4.jpg";
import ProfileImage5 from "@/assets/profile-image5.jpg";

import ProductImage1 from "@/assets/carrot.jpg";
import ProductImage2 from "@/assets/chili.jpg";
import ProductImage3 from "@/assets/garlic.jpg";
import ProductImage4 from "@/assets/onion.jpg";
import ProductImage5 from "@/assets/potato.jpg";
import ProductImage6 from "@/assets/rise.jpg";
import ProductImage7 from "@/assets/tomato.jpg";
import ProductImage8 from "@/assets/sweet potato.jpg";

export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/",
            },
            {
                label: "Analytics",
                icon: ChartColumn,
                path: "/analytics",
            },
        ],
    },
    
    {
        title: "Order",
        links: [
            {
                label: "Order",
                icon: ShoppingCart,
                path: "/order",
            },
            
        ],
    },









    {
        title: "Farmers",
        links: [
            {
                label: "Farmers",
                icon: Users,
                path: "/farmers",
            },
            {
                label: "Add Farmer",
                icon: UserPlus,
                path: "/add-farmers",
            },
            
        ],
    },
    {
        title: "Products",
        links: [
            {
                label: "Products",
                icon: Package,
                path: "/products",
            },
            {
                label: "Add Product",
                icon: PackagePlus,
                path: "/add-product",
            },
            
        ],
    },
    {
        title: "Settings",
        links: [
            {
                label: "Settings",
                icon: Settings,
                path: "/settings",
            },
        ],
    },
];

export const overviewData = [
    {
        name: "Jan",
        total: 1500,
    },
    {
        name: "Feb",
        total: 2000,
    },
    {
        name: "Mar",
        total: 1000,
    },
    {
        name: "Apr",
        total: 5000,
    },
    {
        name: "May",
        total: 2000,
    },
    {
        name: "Jun",
        total: 5900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Aug",
        total: 5500,
    },
    {
        name: "Sep",
        total: 2000,
    },
    {
        name: "Oct",
        total: 4000,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dec",
        total: 2500,
    },
];

export const recentSalesData = [
    {
        id: 1,
        name: "Gammachu",
        email: "olivia.martin@email.com",
        image: ProfileImage1,
        total: 1500,
    },
    {
        id: 2,
        name: "Tola",
        email: "james.smith@email.com",
        image: ProfileImage2,
        total: 2000,
    },
    {
        id: 3,
        name: "Efrem",
        email: "sophia.brown@email.com",
        image: ProfileImage3,
        total: 4000,
    },
    {
        id: 4,
        name: "Iyosi",
        email: "noah.wilson@email.com",
        image: ProfileImage4,
        total: 3000,
    },
    {
        id: 5,
        name: "Natan",
        email: "emma.jones@email.com",
        image: ProfileImage5,
        total: 2500,
    },
    {
        id: 6,
        name: "Belachew",
        email: "william.taylor@email.com",
        image: ProfileImage,
        total: 4500,
    },
   
];

export const topProducts = [
    {
    number: 1,
    name: "Carrote",
    image: ProductImage1,
    description: "Fresh and crunchy carrots grown in Burayu.",
    price: 99.99,
    status: "In Stock",
    rating: 4.5,
},
{
    number: 2,
    name: "Chili",
    image: ProductImage2,
    description: "Spicy red chilies perfect for seasoning and sauces.",
    price: 799.99,
    status: "In Stock",
    rating: 4.7,
},
{
    number: 3,
    name: "Garlic",
    image: ProductImage3,
    description: "Organic garlic bulbs with strong aroma and flavor.",
    price: 1299.99,
    status: "In Stock",
    rating: 4.8,
},
{
    number: 4,
    name: "Onion",
    image: ProductImage4,
    description: "Locally harvested onions, ideal for everyday cooking.",
    price: 199.99,
    status: "Out of Stock",
    rating: 4.4,
},
{
    number: 5,
    name: "Potato",
    image: ProductImage5,
    description: "Versatile potatoes great for boiling, frying, or baking.",
    price: 59.99,
    status: "In Stock",
    rating: 4.3,
},
{
    number: 6,
    name: "Rise",
    image: ProductImage6,
    description: "Premium quality rice with excellent texture and taste.",
    price: 399.99,
    status: "In Stock",
    rating: 4.6,
},
{
    number: 7,
    name: "Tomato",
    image: ProductImage7,
    description: "Juicy red tomatoes perfect for salads and sauces.",
    price: 89.99,
    status: "In Stock",
    rating: 4.7,
},
{
    number: 8,
    name: "Sweet Potato",
    image: ProductImage8,
    description: "Naturally sweet and nutritious sweet potatoes.",
    price: 49.99,
    status: "In Stock",
    rating: 4.5,
}
];



export const notifications = [
  {
    id: 1,
    name: "John Doe",
    message: "Requested access to project files",
    time: "2m ago",
    image:ProfileImage, // you can swap with different user images
    status: "new", // "new" or "seen"
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "Sent you a message",
    time: "10m ago",
    image:ProfileImage,
    status: "seen",
  },
  {
    id: 3,
    name: "Alex Johnson",
    message: "Order #2345 has been approved",
    time: "1h ago",
    image:ProfileImage,
    status: "new",
  },
];
