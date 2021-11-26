import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpensed = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangedFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpensed} />
      <ExpensesList items={filteredExpensed} />
    </Card>
  );
}

export default Expense;
