# Product Management API – Lab Task 1

## Student Information

- **Serial:** 9
- **Name:** Shazzad Hossain Setu
- **Student ID:** 23-52849-2
- **Section:** E
- **Course:** Advanced Programming in Web Technology

## Project Overview

A NestJS RESTful backend application for managing shop products and employees using PostgreSQL and TypeORM.

This project is developed using the faculty-provided NestJS boilerplate.

## 🚀 Prerequisites

Before starting, ensure the following are installed:

- Node.js v22 or later
- PostgreSQL
- Redis (if required by the boilerplate features)
- pnpm
- Docker (optional, for Redis setup)
- Postman (for API testing)

## 📦 Install Dependencies

Open the project directory and run:

```bash
pnpm install --frozen-lockfile
```

## 🔧 Environment Variables

1. Find `.env.example` in the project root.
2. Create a `.env` file in the same directory.
3. Copy the contents of `.env.example` into `.env`.
4. Update the values for your local environment.

Example configuration:

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

Keep the remaining environment variables from `.env.example` and configure them as needed.

**Important:** Do not commit the `.env` file or actual credentials to GitHub.

## 🗄️ Database Setup & Migrations

Create a PostgreSQL database named `product_management_lab1` using DBeaver or PostgreSQL.

Alternatively, execute the following SQL from a connection to another database:

```sql
CREATE DATABASE product_management_lab1;
```

Run the existing TypeORM migrations:

```bash
pnpm run migration:run
```

Migration files are located in:

`src/database/migrations/`

The database uses TypeORM entities, repositories, and migrations.

## ⚡ Redis Setup

Option 1: Run Redis with Docker:

```bash
docker run -d --name krown-redis -p 6379:6379 redis:7-alpine
```

Option 2: Start Redis locally and configure the appropriate environment variables:

```dotenv
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_URL=
```

Redis configuration is retained from the faculty-provided boilerplate.

## ▶️ Running the Backend

Start the NestJS development server:

```bash
pnpm start:dev
```

With `PORT=5002`, the backend is available at:

`http://localhost:5002`

## 📦 Product Management

Each product contains:

| Field | Type | Description |
|---|---|---|
| id | UUID | Automatically generated identifier |
| name | String | Product name |
| category | String | Product category |
| price | Number | Product price |
| quantity | Integer | Available stock quantity |

### Product API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/products` | Create a product |
| GET | `/products` | Retrieve all products |
| GET | `/products/:id` | Retrieve a product by ID |
| PATCH | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

### Sample Product Request

**POST** `/products`

```json
{
  "name": "Cotton T-Shirt",
  "category": "Clothing",
  "price": 650,
  "quantity": 25
}
```

### Product CRUD Testing

All five Product CRUD endpoints have been implemented and tested using Postman with PostgreSQL persistence.

The following screenshots are included in the `screenshots/` directory:

| Screenshot | Description |
|---|---|
| `01-create.png` | Create a product |
| `02-get-all.png` | Retrieve all products |
| `03-get-by-id.png` | Retrieve a product by ID |
| `04-update.png` | Update a product |
| `05-confirm-update.png` | Confirm updated product |
| `06-delete.png` | Delete a product |
| `07-confirm-delete.png` | Confirm deleted product |

## 👨‍💼 Employee Management

Required employee fields:

- `id`
- `name`
- `email`
- `phone`
- `password`
- `age`
- `yearsOfWorking`

Required endpoints:

| Method | Endpoint | Description |
|---|---|---|
| POST | `/employees` | Create an employee |
| GET | `/employees` | Retrieve all employees |
| GET | `/employees/:id` | Retrieve an employee by ID |
| PATCH | `/employees/:id` | Update an employee |
| DELETE | `/employees/:id` | Delete an employee |

## 🏗️ Production Build

Build the project:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start:prod
```

## 📁 Project Structure

```text
product-management-api/
├── src/
│   ├── common/
│   ├── config/
│   ├── database/
│   │   └── migrations/
│   ├── modules/
│   │   ├── user/
│   │   └── product/
│   │       ├── dto/
│   │       ├── entities/
│   │       ├── product.controller.ts
│   │       ├── product.module.ts
│   │       └── product.service.ts
│   ├── app.module.ts
│   └── main.ts
├── screenshots/
├── test/
├── .env.example
├── .gitignore
├── package.json
├── pnpm-lock.yaml
└── README.md
```

Additional folders and files from the original faculty boilerplate are retained.


