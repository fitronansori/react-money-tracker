import Expenses from "./components/Expense/Expenses";

function App() {
  const expenses = [
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
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
