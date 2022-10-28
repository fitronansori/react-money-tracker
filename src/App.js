import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_expenses = [
  {
    id: "e1",
    title: "Tisu Toilet",
    amount: 10.99,
    date: new Date(2020, 7, 14),
  },

  {
    id: "e2",
    title: "TV Baru",
    amount: 100.99,
    date: new Date(2021, 2, 12),
  },

  {
    id: "e3",
    title: "Asuransi Mobil",
    amount: 200.99,
    date: new Date(2021, 2, 28),
  },

  {
    id: "e4",
    title: "Monitor Baru",
    amount: 90.99,
    date: new Date(2021, 5, 12),
  },

  {
    id: "e5",
    title: "Keyboard",
    amount: 50.99,
    date: new Date(2022, 10, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
