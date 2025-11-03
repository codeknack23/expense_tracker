import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../features/transactions/transactionSlice";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import SummaryChart from "../components/SummaryChart";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  return (
    <div className="grid gap-8">
      <TransactionForm />
      {loading ? (
        <p className="text-gray-500 text-center">Loading...</p>
      ) : (
        <>
          <TransactionList transactions={list} />
          <SummaryChart transactions={list} />
        </>
      )}
    </div>
  );
}
