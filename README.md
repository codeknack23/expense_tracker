# 💰 Expense Tracker (MERN Stack)

## 🧾 Overview
The **Expense Tracker Application** is a full-stack MERN project that helps users manage their income and expenses efficiently. It allows users to add, view, filter, and delete transactions, and provides a visual chart summary to analyze spending habits.

## ⚙️ Tech Stack
- Frontend: React (Vite) + Tailwind CSS
- Backend: Node.js + Express.js + MongoDB
- State Management: Redux Toolkit
- Charts: Recharts

## 🚀 Complete Project Setup (Step-by-Step)

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker

expense-tracker/
│
├── backend/
│   ├── models/
│   │   └── Transaction.js
│   ├── routes/
│   │   └── transactionRoutes.js
│   ├── controllers/
│   │   └── transactionController.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       ├── app/
│       │   └── store.js
│       ├── features/
│       │   └── transactions/
│       │        └── transactionSlice.js
│       ├── components/
│       │   ├── TransactionForm.jsx
│       │   ├── TransactionList.jsx
│       │   └── SummaryChart.jsx
│       └── pages/
│           └── Dashboard.jsx
│
└── README.md

cd backend
npm install

MONGO_URI=your_mongodb_connection_string
PORT=5000

npm start

| Method | Endpoint                          | Description            |
| ------ | --------------------------------- | ---------------------- |
| GET    | /api/transactions                 | Fetch all transactions |
| POST   | /api/transactions                 | Add a new transaction  |
| PUT    | /api/transactions/:id             | Update a transaction   |
| DELETE | /api/transactions/:id             | Delete a transaction   |
| GET    | /api/transactions?type=income     | Filter by type         |
| GET    | /api/transactions?category=food   | Filter by category     |
| GET    | /api/transactions?date=2025-11-02 | Filter by date         |


cd frontend
npm install
npm run dev


# Terminal 1
cd backend
npm start

# Terminal 2
cd frontend
npm run dev

👤 Author

Ronak Bhojayya
📧 Email: ronakbhojayya23@gmail.com

📍 Mumbai, India


