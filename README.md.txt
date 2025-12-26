# 🛒 Smart Tech Store

Smart Tech Store is a **Store Management System** for electronic devices built using **HTML, CSS, Bootstrap, and Vanilla JavaScript**.  
The project allows users to manage products through full **CRUD operations** with data stored locally using **Local Storage**.

---

## 📌 Project Overview
This project simulates a simple electronic store where users can:
- Add new products
- Update existing products
- Delete products
- Search for products by name
- Display products dynamically in cards

All data is saved in the browser using **Local Storage**, so products remain after refreshing the page.

---

## 🚀 Features
- ✅ Add electronic products
- ✏️ Update product information
- ❌ Delete products
- 🔍 Search products by name (Real-time search)
- 🖼 Upload product images
- 💾 Persistent data using Local Storage
- 📱 Responsive design with Bootstrap

---

## 📦 Product Data Structure
Each product contains:
- **Product Name**
- **Product Price**
- **Product Category**
- **Product Description**
- **Product Image**

Stored as objects inside an array in Local Storage.

---

## 🛠️ Technologies Used
- **HTML5** – Page structure
- **CSS3** – Styling
- **Bootstrap** – Responsive layout & UI components
- **JavaScript** – Logic & CRUD operations
- **Local Storage** – Data persistence

---

## ⚙️ JavaScript Functionality
- `addProduct()` → Add new product to the list
- `updateProduct()` → Update existing product data
- `deleteProduct(index)` → Remove a product
- `searchProduct()` → Search products by name
- `displayProduct(arr)` → Display products dynamically
- `clearForm()` → Reset form inputs
- `setUpData(index)` → Load product data into form for updating

---

## 📁 Project Structure
smart-tech-store/
│
├── index.html # Main HTML file
│
├── CSS/
│ ├── bootstrap.min.css
│ └── CURD.css # Custom styles
│
├── JS/
│ └── CURD.js # CRUD logic & Local Storage
│
├── CRUD img/ # Product images
│ └── default.jpg
│
├── screenshots/ # Project screenshots
│ └── preview.png
│
└── README.md

👩‍💻 Author
Nada Mohamed Farhat
Faculty of Computer Science – Benha National University
Front-End Developer