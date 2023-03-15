import { prisma } from "./database.server";

export async function addExpense(expenseData) {
  try {
    const expense = await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    });

    return expense;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getExpenses() {
  try {
    const expenses = await prisma.expense.findMany({
      orderBy: {
        date: "desc",
      },
    });

    return expenses;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getExpense(id) {
  try {
    const expense = await prisma.expense.findFirst({ where: { id } });

    return expense;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
