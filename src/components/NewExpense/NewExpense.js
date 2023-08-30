import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const newExpense = (props) => {
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseDatanew = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseDatanew);
    props.onAddExpense(expenseDatanew);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler}></ExpenseForm>
    </div>
  );
};

export default newExpense;
