# ExpenseMonitor

A full-stack expense sharing and tracking application built with **Spring Boot**, **PostgreSQL**, and planned integration with **React**, **Kafka**, and **AWS**.

The backend supports user management, group creation, expense tracking, and smart sharing of expenses among group members — similar to apps like Splitwise.

## ✅ Key Features

- Create users and groups
- Add shared expenses to a group
- Split expenses among selected users
- Track who paid and who owes
- Group-wise expense summaries and balances

## 🛠 Built With

- Java 17, Spring Boot 3
- Spring Data JPA + Hibernate
- PostgreSQL
- REST API tested via Postman
- Upcoming: JWT Authentication, React Frontend, Kafka and AWS S3/SES integration

## 📬 API Usage (Postman Friendly)

You can test the following endpoints using Postman or curl.  
All requests and responses are in `application/json`.

---

### 👤 Create a User

**POST** `/api/users`

**Request Body:**
```json
{
  "name": "Yokesh",
  "username": "yokesh321",
  "password": "123"
}
```
**Response:**
```json
{
  "id": 1,
  "name": "Yokesh",
  "username": "yokesh321"
}
```
### 👤👤 Create a Group

**POST** `/api/groups?createdByUserId=1`

**Request Body:**
```json
{
  "name": "Japan Trip"
}
```
**Response:**
```json
{
  "id": 1,
  "name": "Japan Trip",
  "createdBy": {
    "id": 1,
    "username": "yokesh321"
  }
}
```
### 💸 Create an Expense

**POST** `/api/expense?userId=1&groupId=1`

**Request Body:**
```json
{
    "description": "Flight booking",
    "amount": 100000.0,
    "expenseDate": "2025-06-28"
}
```
**Response:**
```json
{
    "id": 1,
    "description": "Flight booking",
    "amount": 100000,
    "expenseDate": "2025-06-28",
    "group": {
        "id": 1,
        "name": "Japan Trip",
        "creator": {
            "id": 1,
            "username": "yokesh321"
        }
    },
    "paidUser": {
        "id": 1,
        "username": "yokesh321"
    }
}
```
### 🤝🏻 Share Expenses between Users

**POST** `/api/expenseshares/1`

**Request Body:**
```json
[1,2]
```

**Response:**
```json
[
  {
    "id": 1,
    "user": { "id": 1 },
    "expense": { "id": 1 },
    "shareAmount": 50000.0
  },
  {
    "id": 2,
    "user": { "id": 2 },
    "expense": { "id": 1 },
    "shareAmount": 50000.0
  }
]
```
### 👥 Get All Users

**GET** `/api/users`

**Response:**
```json
[
  {
    "id": 1,
    "name": "Yokesh",
    "username": "yokesh321"
  },
  {
    "id": 2,
    "name": "Mane",
    "username": "mane_sadio"
  }
]
```
### 📬 Postman Collection

Import the complete Postman collection to test all the API endpoints:
📁 [Expense Monitor Postman Collection] (./postman/ExpenseMonitor.postman_collection.json)

### 🔜 Roadmap

- [ ] 🔐 JWT Authentication (Login/Register)
- [ ] 📡 Kafka Integration (event-driven architecture)
  - Publish `expense-created`, `expense-shared` events
  - Add consumers for notifications/logs
- [ ] ⚛️ React Frontend (with Axios + Tailwind)
- [ ] ☁️ AWS S3 for receipt uploads
- [ ] 📬 AWS SES for email notifications
