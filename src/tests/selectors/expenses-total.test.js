import getExpenseTotal from "../../selectors/expenses-total"
import expenses from "../fixtures/expenses"


test('should return 0 if no value', () => {
  const expense = [];
  const total=getExpenseTotal(expense)
  expect(total).toBe(0)
});


test('should return expense[1]value', () => {
    const expense = [expenses[1]];
    const total=getExpenseTotal(expense)
    expect(total).toBe(109500);
});
  
test('should return multiple expenes', () => {
  const expense = expenses;
  const total=getExpenseTotal(expense)
  expect(total).toBe((109500+195+4500))
});