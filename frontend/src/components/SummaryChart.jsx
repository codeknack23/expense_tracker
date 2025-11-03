import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SummaryChart({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Transaction Summary",
        data: [income, expense],
        backgroundColor: ["#22c55e", "#ef4444"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="font-semibold mb-3">Summary</h2>
      <div className="w-full h-64">
        <Pie data={data} />
      </div>
      <p className="mt-3 text-center">
        <b>Total Income:</b> ₹{income} | <b>Total Expense:</b> ₹{expense}
      </p>
    </div>
  );
}
