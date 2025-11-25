# Simple Node.js PostgreSQL connection Example

> A samll project demonstrating how to connect to a PostgreSQL database using Node.js and retrieve data from a table,then display it in the console.

----------
## Poroject Description
this project contains two main files:
- conn.js : Handles the connection to the postgreSQL database.
- index.js: Fetches data from the database and prints it in the console.
This setup is useful for beginners learning how to intgrate Node.js with PostgreSQL.

## Files Overview
### `conn.js`
- Creates and exports a PostgreSQL client.
- Uses environment variables from `.env` to store DB credentials.

### `index.js`
- Imports the client from `conn.js`.
- Executes a SQL query.
- Logs the results in the console.

## Features
- Connect to PostgreSQL using Node.js.
- Simple and clean code structure.
- Demonstrates basic data featching.
- Uses `dotenv` for environment variable handling.

---

## REquirements
Make sure you have installed:

- Node.js (v14 or higher)
- PostgreSQL
- npm

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

### [4] Run the project
```bash
  node index.js
or
 npm start
```
