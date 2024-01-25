import React,{useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((item) =>{
    return filteredYear === item.date.getFullYear().toString();
  })

  let expensesContent = <p>No Expenses found.</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) =>{
      return <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount= {expense.amount}
        date= {expense.date}
      />
    })
  }
  
  return (
    <Card className="expenses"> 
      <ExpenseFilter 
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
