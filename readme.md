# ================================
# PRODUCT CRUD API - CODE INSTALLATION GUIDE
# ================================

# Product CRUD API

A simple Product Management CRUD API built using:

- Node.js
- Express.js
- MongoDB
- Mongoose

This project demonstrates a clean backend folder structure using:

- Config
- Model
- Controller
- Routes

---

# Features

✅ Create Product  
✅ Get All Products  
✅ Update Product  
✅ Delete Product  

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors

---

# Project Structure

project/
│
├── config/
│   └── dbconnection.config.js
│
├── controller/
│   └── products.controller.js
│
├── model/
│   └── products.model.js
│
├── routes/
│   └── products.routes.js
│
├── server.js
├── .env
└── package.json

---

# Environment Variables

Create a `.env` file in the root folder and add the following variables:

PORT=8080

DATABASE_URI=mongodb://localhost:27017/b27-revision

---

# Installation

# Clone the project

git clone [Click to get the Repo Link](https://github.com/LakshmiNarasimhan273/b27-revision-session.git)

# Move into project folder

cd project-name

# Install dependencies

npm install

---

# Run The Server

# Development Mode

npm run dev

# Production Mode

npm start

---

# API Base URL

http://localhost:8080/products

---

# API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | /products/create | Create Product |
| GET | /products | Get All Products |
| PUT | /products/:id | Update Product |
| DELETE | /products/:id | Delete Product |

---

# Sample Product JSON

{
  "name": "iPhone 15",
  "price": 79999,
  "category": "Mobile"
}

---

# Controller Logic Highlights

## Create Product

- Uses `Product.create()`
- Inserts new product into MongoDB
- Returns created product data with success response

## Get All Products

- Uses `Product.find()`
- Fetches complete product list
- Returns total product count

## Get Single Product

- Uses `Product.findById()`
- Fetches product using dynamic route parameter
- Handles product not found case

## Update Product

- Uses `Product.findByIdAndUpdate()`
- Updates existing product data
- Uses:
  - `new: true`
  - `runValidators: true`
- Returns updated product

## Delete Product

- Uses `Product.findByIdAndDelete()`
- Removes product from database
- Handles invalid product ID case

---

# Important Backend Concepts Used

## Express Router

Used to separate routes from server logic.

## MVC Pattern

The project follows a simple MVC architecture:

- Model → Database Schema
- Controller → Business Logic
- Routes → API Endpoints

## Async Await

All database operations use async/await for handling asynchronous code.

## Error Handling

Try-catch blocks are used in all controllers to prevent server crashes.

## Mongoose Schema Validation

Required fields are validated using mongoose schema rules.

## REST API Structure

Follows proper REST conventions:

- POST → Create
- GET → Read
- PUT → Update
- DELETE → Remove

---

# Dependencies Used

npm install express mongoose dotenv cors

# Dev Dependency

npm install nodemon --save-dev

---

# Author

Developed for learning and practicing Node.js, Express.js, and MongoDB CRUD operations.