import React from "react";

export default function TransactionList({ transactions }) {
  if (!transactions.length)
    return <p className="text-center text-gray-500">No transactions yet.</p>;

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-semibold mb-2">Recent Transactions</h2>
      <ul>
        {transactions.map((t) => (
          <li
            key={t._id}
            className="flex justify-between border-b py-2 text-sm"
          >
            <span>{t.description || t.category}</span>
            <span
              className={`${
                t.type === "income" ? "text-green-600" : "text-red-500"
              }`}
            >
              ₹{t.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
