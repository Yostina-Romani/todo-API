# 📝 Todo API

A simple RESTful API built with Node.js and Express.js to manage tasks (CRUD operations).

---

## 🚀 Features

* Create a new task
* Get all tasks
* Update a task
* Delete a task

---

## 🛠️ Tech Stack

* Node.js
* Express.js

---

## 📂 Project Structure

```
todo_api/
│── index.js
│── package.json
```

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/Yostina-Romani/todo-API.git
```

2. Navigate to the project folder:

```bash
cd todo-API
```

3. Install dependencies:

```bash
npm install
```

---

## ▶️ Run the Server

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

---

### 🔹 Create a task

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

---

### 🔹 Update a task

```
PUT /tasks/:id
```

---

### 🔹 Delete a task

```
DELETE /tasks/:id
```

---

## ⚠️ Notes

* Data is stored in memory (no database yet)
* All data will be lost when the server restarts

---

## 📌 Future Improvements

* Add database (MySQL)
* Add authentication
* Better validation

---

## 👩‍💻 Author

Yostina Romani
