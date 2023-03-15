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
