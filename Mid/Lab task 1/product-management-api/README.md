# 🛍️ Product Management API – Lab Task 1

## 👨‍🎓 Student Information

- **Serial:** 9
- **Name:** Shazzad Hossain Setu
- **Student ID:** 23-52849-2
- **Section:** E
- **Course:** Advanced Programming in Web Technology

---

## 📖 Project Overview

A RESTful backend application developed using **NestJS, TypeScript, PostgreSQL, and TypeORM** for managing shop products and employees.

This project is built using the **faculty-provided NestJS boilerplate** and implements complete CRUD (Create, Read, Update, Delete) operations for both Product and Employee Management.

### ✨ Key Features

- Complete Product CRUD operations
- Complete Employee CRUD operations
- PostgreSQL database integration
- TypeORM entities and repositories
- Database schema management using TypeORM migrations
- Separate modules, controllers, services, entities, and DTOs
- API testing using Postman
- 14 screenshots documenting Product and Employee CRUD operations

---

## 🚀 Prerequisites

Before starting, ensure the following are installed:

- Node.js v22 or later
- PostgreSQL
- pnpm
- Redis (if required by the boilerplate features)
- Postman (for API testing)
- DBeaver (optional, for database management)
- Docker (optional, for Redis setup)

---

## 📦 Install Dependencies

Open the project directory:

`Mid/Lab task 1/product-management-api`

Install the required dependencies:

```bash
pnpm install --frozen-lockfile
```

The project uses the existing `pnpm-lock.yaml` file for dependency management.

---

## 🔧 Environment Variables

1. Go to the project root directory.
2. Find the `.env.example` file.
3. Create a new `.env` file in the same directory.
4. Copy the contents of `.env.example` into `.env`.
5. Update the values according to your local environment.

### Example Configuration

```dotenv
NODE_ENV=development
NODE_DB_ENV=development
PORT=5002

DB_CLIENT=postgres
DB_DATABASE=product_management_lab1
DB_USER=postgres
DB_PASSWORD=your_postgresql_password
DB_HOST=localhost
DB_PORT=5432
```

Keep the remaining environment variables from the faculty-provided `.env.example` file and configure them when required.

> **🔒 Security Note:** Never upload the `.env` file to GitHub or expose database passwords, JWT secrets, and other private credentials in screenshots or documentation.

---

## 🗄️ Database Setup & Migrations

### Step 1: Create the Database

Create a PostgreSQL database named:

`product_management_lab1`

You can create it using DBeaver or execute the following SQL while connected to an existing PostgreSQL database:

```sql
CREATE DATABASE product_management_lab1;
```

### Step 2: Configure Database Connection

Update the database credentials in the `.env` file.

### Step 3: Run Migrations

```bash
pnpm run migration:run
```

The TypeORM migration files are located in:

`src/database/migrations/`

### Database Tables

The application uses the following tables:

| Table | Purpose |
|---|---|
| `users` | Existing User module from the faculty boilerplate |
| `products` | Stores product information |
| `employees` | Stores employee information |
| `migrations` | Tracks executed database migrations |

All database operations are performed using TypeORM repositories.

---

## ⚡ Redis Setup

The faculty-provided boilerplate includes Redis configuration.

### Option 1: Run Redis with Docker

```bash
docker run -d --name krown-redis -p 6379:6379 redis:7-alpine
```

### Option 2: Local Redis Setup

Start Redis locally and configure the corresponding `.env` variables:

```dotenv
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_URL=
```

Redis is retained as part of the original boilerplate configuration.

---

## ▶️ Running the Backend

Start the NestJS application in development mode:

```bash
pnpm start:dev
```

With `PORT=5002`, the API base URL is:

**http://localhost:5002**

The application connects to the configured PostgreSQL database.

---

## 📦 Product Management

The Product module implements all five required CRUD operations.

### 📋 Product Fields

| Field | Type | Description |
|---|---|---|
| `id` | UUID | Automatically generated product ID |
| `name` | String | Product name |
| `category` | String | Product category |
| `price` | Number | Product price |
| `quantity` | Integer | Available product quantity |

### 🔗 Product API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/products` | Create a new product |
| GET | `/products` | Retrieve all products |
| GET | `/products/:id` | Retrieve a specific product |
| PATCH | `/products/:id` | Update an existing product |
| DELETE | `/products/:id` | Delete a product |

### 📝 Sample Product Request

**POST** `/products`

```json
{
  "name": "Cotton T-Shirt",
  "category": "Clothing",
  "price": 650,
  "quantity": 25
}
```

### ✅ Product CRUD Testing

All Product CRUD endpoints were tested using Postman with PostgreSQL database persistence.

Two sample products were used:

- Cotton T-Shirt
- Denim Jeans

The testing included creating products, retrieving all products, retrieving a product by ID, updating product details, confirming the update, deleting a product, and confirming the deletion.

---

## 👨‍💼 Employee Management

The Employee module implements all five required CRUD operations.

### 📋 Employee Fields

| Field | Type | Description |
|---|---|---|
| `id` | UUID | Automatically generated employee ID |
| `name` | String | Employee name |
| `email` | String | Employee email address |
| `phone` | String | Employee contact number |
| `password` | String | Dummy password for lab testing |
| `age` | Integer | Employee age |
| `yearsOfWorking` | Integer | Employee work experience in years |

### 🔗 Employee API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/employees` | Create a new employee |
| GET | `/employees` | Retrieve all employees |
| GET | `/employees/:id` | Retrieve a specific employee |
| PATCH | `/employees/:id` | Update an existing employee |
| DELETE | `/employees/:id` | Delete an employee |

### 📝 Sample Employee Request

**POST** `/employees`

```json
{
  "name": "Rahim Ahmed",
  "email": "rahim@example.com",
  "phone": "01712345678",
  "password": "dummy123",
  "age": 25,
  "yearsOfWorking": 2
}
```

### ✅ Employee CRUD Testing

The Employee API was tested using Postman.

Two sample employees were used:

- Rahim Ahmed
- Karim Hasan

The testing workflow included creating employees, retrieving all employees, retrieving an employee by ID, updating employee information, confirming the update, deleting an employee, and confirming the deletion.

> **🔐 Password Note:** Dummy passwords are used only for educational testing. In real-world applications, passwords should be securely hashed before storage and excluded from API responses.

---

## 📸 Postman API Testing Screenshots

A total of **14 screenshots** are organized into two separate folders:

- `screenshots/products/` — 7 Product CRUD screenshots
- `screenshots/employees/` — 7 Employee CRUD screenshots

### 📦 Product Screenshots

| Screenshot | Description |
|---|---|
| `01-create.png` | POST request to create a product |
| `02-get-all.png` | GET request displaying two products |
| `03-get-by-id.png` | GET request retrieving a product by ID |
| `04-update.png` | PATCH request updating a product |
| `05-confirm-update.png` | GET request confirming the updated product |
| `06-delete.png` | DELETE request removing a product |
| `07-confirm-delete.png` | GET request confirming product deletion |

**Folder:** `screenshots/products/`

### 👨‍💼 Employee Screenshots

| Screenshot | Description |
|---|---|
| `01-create.png` | POST request to create an employee |
| `02-get-all.png` | GET request displaying two employees |
| `03-get-by-id.png` | GET request retrieving an employee by ID |
| `04-update.png` | PATCH request updating an employee |
| `05-confirm-update.png` | GET request confirming the updated employee |
| `06-delete.png` | DELETE request removing an employee |
| `07-confirm-delete.png` | GET request confirming employee deletion |

**Folder:** `screenshots/employees/`

### 📌 Screenshot Requirements

Each screenshot should clearly display:

- HTTP request method
- Complete API URL
- HTTP response status code
- JSON response body
- Request body for POST and PATCH operations

All screenshots should contain readable text and should not expose database passwords or other sensitive credentials.

---

## 📁 Project Structure

```text
product-management-api/
├── src/
│   ├── common/
│   ├── config/
│   ├── database/
│   │   └── migrations/
│   │       ├── create-user-table.ts
│   │       ├── create-product-table.ts
│   │       └── create-employee-table.ts
│   ├── modules/
│   │   ├── user/
│   │   ├── product/
│   │   │   ├── dto/
│   │   │   │   └── product.dto.ts
│   │   │   ├── entities/
│   │   │   │   └── product.entity.ts
│   │   │   ├── product.controller.ts
│   │   │   ├── product.module.ts
│   │   │   └── product.service.ts
│   │   └── employee/
│   │       ├── dto/
│   │       │   └── employee.dto.ts
│   │       ├── entities/
│   │       │   └── employee.entity.ts
│   │       ├── employee.controller.ts
│   │       ├── employee.module.ts
│   │       └── employee.service.ts
│   ├── app.module.ts
│   └── main.ts
├── screenshots/
│   ├── products/
│   │   ├── 01-create.png
│   │   ├── 02-get-all.png
│   │   ├── 03-get-by-id.png
│   │   ├── 04-update.png
│   │   ├── 05-confirm-update.png
│   │   ├── 06-delete.png
│   │   └── 07-confirm-delete.png
│   └── employees/
│       ├── 01-create.png
│       ├── 02-get-all.png
│       ├── 03-get-by-id.png
│       ├── 04-update.png
│       ├── 05-confirm-update.png
│       ├── 06-delete.png
│       └── 07-confirm-delete.png
├── test/
├── .env.example
├── .gitignore
├── package.json
├── pnpm-lock.yaml
└── README.md
```

*Note: Migration filenames include their original timestamp prefixes. Other files and directories from the faculty-provided boilerplate are retained.*

---

## 🏗️ Production Build

Build the application:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start:prod
```

---

## ✅ Project Completion Status

| Component | Status |
|---|---|
| Product Entity, DTO, Service, Controller & Module | ✅ Completed |
| Employee Entity, DTO, Service, Controller & Module | ✅ Completed |
| PostgreSQL Database Integration | ✅ Completed |
| TypeORM Database Migrations | ✅ Completed |
| Product CRUD API Testing | ✅ Completed |
| Employee CRUD API Testing | ✅ Completed |
| Product Screenshots (7) | ✅ Completed |
| Employee Screenshots (7) | ✅ Completed |
| README Documentation | ✅ Completed |

---

## 📝 Additional Notes

- The project follows the faculty-provided NestJS boilerplate structure.
- Product and Employee features are implemented in separate modules.
- TypeORM repositories handle database CRUD operations.
- Database tables are managed through TypeORM migrations.
- API endpoints are tested using Postman.
- The `.env` file, `node_modules`, and build output should not be included in the GitHub submission.
- Dummy test data is used for educational purposes.

---

**Lab Task 1 — Advanced Programming in Web Technology**  
**Shazzad Hossain Setu | 23-52849-2 | Section E | Serial 9**