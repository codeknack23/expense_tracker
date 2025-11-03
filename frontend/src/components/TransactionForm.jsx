import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../features/transactions/transactionSlice";

export default function TransactionForm() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    type: "expense",
    amount: "",
    description: "",
    category: "",
    date: new Date().toISOString().split("T")[0], // default to today
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting form:", form);
    dispatch(addTransaction({ ...form, amount: Number(form.amount) }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-3 items-center bg-white p-4 rounded-lg shadow"
    >
      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        className="border p-2 rounded w-24"
      />

      <input
        name="description"
        type="text"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="border p-2 rounded flex-1"
      />

      <input
        name="category"
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="border p-2 rounded w-32"
      />

      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        className="border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}
