
# 📝 Todo API

A simple RESTful API built with Node.js, Express.js, and MySQL to manage tasks (CRUD operations).

---

## 🚀 Features

* Create a new task
* Get all tasks
* Update a task
* Delete a task
* Data stored in **MySQL database**

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MySQL (MySQL Workbench)

---

## 📂 Project Structure

```
todo_api/
│── index.js
│── package.json
│── .gitignore
```

---

## ⚙️ Database Setup (MySQL)

1. Open **MySQL Workbench**
2. Create a database:

```sql
CREATE DATABASE todo_api;
```

3. Create table:

```sql
USE todo_api;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  done BOOLEAN DEFAULT false
);
```

---

## 🔌 Database Connection (Node.js)

Example connection in `index.js`:

```js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todo_api'
});

db.connect((err) => {
  if (err) {
    console.log('DB connection failed');
  } else {
    console.log('Connected to MySQL');
  }
});
```

---

## 📦 Installation

```bash
git clone https://github.com/Yostina-Romani/todo-API.git
cd todo-API
npm install
```

---

## ▶️ Run Server

```bash
node index.js
```

Server will run on:

```
http://localhost:3000
```

---

## 📌 API Endpoints

### 🔹 Get all tasks

```
GET /tasks
```

### 🔹 Create task

```
POST /tasks
```

Body:

```json
{
  "title": "Learn Node.js",
  "done": false
}
```

### 🔹 Update task

```
PUT /tasks/:id
```

### 🔹 Delete task

```
DELETE /tasks/:id
```

---

## 📌 Notes

* Data is now stored in **MySQL database**
* Make sure MySQL service is running before starting server

---

## 👩‍💻 Author

Yostina Romani
---
