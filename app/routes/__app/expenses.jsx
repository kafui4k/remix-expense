import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { FaDownload, FaPlus } from "react-icons/fa";
import ExpensesList from "../../components/expenses/ExpensesList";
import { getExpenses } from "../../data/expenses.server";
// import { json } from "@remix-run/node";

export default function ExpensesLayout() {
  const expenses = useLoaderData();

  const hasExpenses = expenses && expenses.length > 0;

  return (
    <>
      <Outlet />
      <main>
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus />
            <span>Add Expense</span>
          </Link>
          <a href="/expenses/raw">
            <FaDownload />
            <span>Load Raw Data</span>
          </a>
        </section>
        {hasExpenses && <ExpensesList expenses={expenses} />}
        {!hasExpenses && (
          <section id="no-expenses">
            <h1>No expenses found</h1>
            <p>
              Start <Link to="add">adding some</Link>today.
            </p>
          </section>
        )}
      </main>
    </>
  );
}

export async function loader() {
  const expenses = await getExpenses();

  // if (!expenses || expenses.length === 0) {
  //   throw json(
  //     { message: "Could not find any expenses" },
  //     { status: 404, statusText: "No expenses found" }
  //   );
  // }

  return expenses;
}

// export function CatchBoundary() {
//   return <p>Error</p>
// }
