# ToDo App Backend

This is the backend of a ToDo application built using the MERN (MongoDB, Express, React, Node.js) stack. This backend handles creating, reading, updating, and deleting (CRUD) operations for ToDo entries stored in a MongoDB database.

## Features

- Create a new ToDo entry
- Fetch all ToDo entries
- Fetch a ToDo entry by ID
- Update a ToDo entry
- Delete a ToDo entry

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose ORM)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/ToDo-app-backend.git:
   ```

## Configuration

1. Create a `.env` file in the root directory and add the following:
   ```env
   PORT = 3000
   DATABASE_URL = "mongodb://localhost:27017/DataBaseOfBlogApp"
   ```

## Running the Server

Start the development server with:

```sh
npm run dev
```

The backend will be running on `http://localhost:3000` by default.

## API Endpoints

### Base URL: `http://localhost:5000/api/v1

| Method | Endpoint                | Description             |
| ------ | ----------------------- | ----------------------- |
| POST   | `/`createTodo           | Create a new ToDo entry |
| GET    | `/`getTodos             | Fetch all ToDo entries  |
| GET    | `/`getTodosById/\:id    | Fetch a ToDo by ID      |
| PUT    | `/`updateTodoById/\:id  | Update a ToDo by ID     |
| DELETE | `/`/deleteTodoById/\:id | Delete a ToDo by ID     |

