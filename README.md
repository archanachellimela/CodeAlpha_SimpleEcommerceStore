# CodeAlpha_SimpleEcommerceStore
# Simple E-Commerce Store 🛒

This is a simple full stack e-commerce website created for the CodeAlpha Full Stack Development Internship.

Users can view products with images, prices, and add them to cart.

---

#  Features

- Product Listing
- Product Images
- Add to Cart Button
- Update Products
- MongoDB Database
- REST API Integration
- Responsive UI

---

#  Technologies Used

## Frontend
- HTML
- CSS
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MongoDB

---

#  Project Files

```bash
frontend/
 ├── index.html
 ├── style.css
 └── script.js

backend/
 └── server.js
```

---

#  How to Run Project

## Step 1

Open terminal inside backend folder.

```bash
npm install
```

---

## Step 2

Start MongoDB.

```bash
mongod
```

---

## Step 3

Run server.

```bash
nodemon server.js
```

---

## Step 4

Open `index.html` using Live Server in VS Code.

---

#  API Routes

## Get Products

```bash
GET /products
```

## Add Product

```bash
POST /products
```

## Update Product

```bash
PUT /products/:id
```

---

#  Example Product

```json
{
  "name":"Laptop",
  "price":50000,
  "image":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  "description":"Gaming Laptop"
}
```

---

#  Output

The website displays:
- Product Image
- Product Name
- Product Price
- Add to Cart Button

