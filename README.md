# Simple Node.js PostgreSQL connection Example

> A samll project demonstrating how to connect to a PostgreSQL database using Node.js, execute a SQL query and display the results in the console.

----

## Poroject Description
This project contains two main files:
- **conn.js** - Manages the PostgreSQL connection pool using the `pg` library and loads environment variables with `dotenv`.
- **index.js** - Performs a SQL query and displays the result in the console.
  
This simple structure is ideal for beginners learning how to intgrate Node.js with PostgreSQL.

---

## Files Overview
### `conn.js`
- Uses `pg.Pool` to Create a connection pool.
- Reads configuration values from environment variables.
- Exports functions to execute queries and close the pool.
- Ensures proper connection release using try/finally.
  
### `index.js`
- Imports the database query function from `conn.js`.
- Runs a sample SQL query.
- Prints results using `console.table`.
- Closes the connection pool safely.

---

## Features
- PostgreSQL connection pooling.
- Clean and modern ES Modules.
- Safe query execution with parameters.
- Environment variable handling with `dotenv`.
- Very simple and biginner-friendly structure.
  
---

## Requirements
Make sure you have installed:

- **Node.js** (v16 or higher recommended)
- **PostgreSQL**
- **npm**
  
---

## Installation & Usage

Follow these steps to run the project locally:

### [1] Clone the repository
```bash
git clone https://github.com/dengmyaom/conntopsql.git
cd conntopsql
```
### [2] Install dependencies
```bash
npm install
```
### [3] Create a .env file
Add your PostgreSQL Credentials:
DB_USER=your_database_user
DB_PASS=your_database_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database_name
DB_POOL_SIZE=10

### [4] Run the project
```bash
  node index.js
```
Or if you added on npm script:
```bash
 npm start
```
