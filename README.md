# Group-24-collaboration-repo

System Overview: AgriLink

   A digital platform that connects Farmers, Buyers, and Admins for trading agricultural products.

👥 User Roles
     Role                         Description
     Farmer                 Registers products, views offers, tracks sales.
     Buyer                  Searches and buys available farm products.
     Admin                  Manages users, products, categories, reports, disputes.

📐 System Architecture

Tech Stack Recommendation (MERN Style):

Frontend:     React (Vite), Tailwind UI

Backend:      Node.js + Express

Database:     MongoDB (Mongoose ODM)

Auth:         JWT (Access + Refresh Tokens)

File          
Uploads:      Cloudinary or Firebase Storage (for product images)

Task 
Scheduling:   Node-cron (for expired offers, weekly reports)

APIs:         RESTful

🧩 High-Level Modules & Features

1. Authentication & Authorization
   
  Signup/Login (email or phone-based)

  Role-based access (Farmer / Buyer / Admin)

  JWT token management

  Password reset (email-based or OTP)
  
2. Farmer Dashboard
  
  Profile Management (name, location, farm type)

  Product Management:

  Add new product (name, category, price, quantity, image, description)

  Edit / Delete product

  Mark product as "Sold"

  View orders from buyers

  Sales Analytics (past 30 days, top-selling items)

3. Buyer Dashboard
   
  Search/Filter Products (category, location, price, availability)

  Product Details Page (image, price, description, farmer contact)

  Cart & Checkout

  Place Order

  View Order History

  Rate Purchased Products

4. Admin Panel

 User Management:

   View all users

   Approve/suspend accounts

   Role assignment (force promote/demote)


 Product Oversight:

   View all listings

   Remove/report flagged items

   Manage product categories

   Order & Dispute Management

   View system analytics (daily new users, orders, popular products)







