# Like Me - Social Network (Part I)

"Like Me" is a social network project built with **React** for the frontend and **Node.js/Express** for the backend, using **PostgreSQL** as the database.

## Prerequisites

- [Node.js](https://nodejs.org/) (Version 16 or higher)
- [PostgreSQL](https://www.postgresql.org/)

## 1. Database Setup

Using your PostgreSQL client (psql, pgAdmin, etc.), run the following commands to create the database and table:

```sql
CREATE DATABASE likeme;

-- Connect to the database
\c likeme

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(25),
  img VARCHAR(1000),
  descripcion VARCHAR(255),
  likes INT DEFAULT 0
);
```

## 2. Backend Setup (Server)

1.  Navigate to the `server` directory:
    ```bash
    cd server
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Configure the environment variables by editing the `.env` file in the `server` directory. Make sure to set your own PostgreSQL password:
    ```env
    DB_USER=postgres
    DB_HOST=localhost
    DB_DATABASE=likeme
    DB_PASSWORD=your_password
    DB_PORT=5432
    PORT=3000
    ```
4.  Start the backend server:
    ```bash
    npm run dev
    ```
    The server will be available at `http://localhost:3000`.

## 3. Frontend Setup (React)

1.  In the root directory of the project, install the dependencies:
    ```bash
    npm install
    ```
2.  Start the React application:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Functionality

- **GET /posts**: Retrieves all posts from the database.
- **POST /posts**: Adds a new post to the database with title, image URL, and description.

## Technologies Used

- **Frontend**: React, Axios, Vite.
- **Backend**: Node.js, Express, PG (node-postgres), CORS, Dotenv.
- **Database**: PostgreSQL.
