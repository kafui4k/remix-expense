const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "First Expense",
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "Second Expense",
    amount: 212.99,
    date: new Date().toISOString(),
  },
];
export function loader() {
  return DUMMY_EXPENSES;
}
