import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [renderedForm, setRenderedForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpensedData) => {
    const expenseData = {
      ...enteredExpensedData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setRenderedForm(false);
  };

  const renderedFormHandler = () => {
    setRenderedForm(true);
  };

  const stopRenderingForm = () => {
    setRenderedForm(false);
  };

  return (
    <div className="new-expense">
      {!renderedForm && (
        <button onClick={renderedFormHandler}>Add New Expense</button>
      )}
      {renderedForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopRenderingForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
