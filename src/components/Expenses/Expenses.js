import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
    const [filter, setFilter] = useState(2021)

    const onFilterSelected = (filterSelection) => {
        setFilter(parseInt(filterSelection))
        console.log(filterSelection)

    }
    return (
        <div>
        <Card className="expenses">

                <ExpensesFilter selected={filter} classname="expenses-filter" filterSelected={onFilterSelected}/>
            {
                props.items.filter((expense) => { return (parseInt(expense.date.getFullYear()) === filter)}).map((expense) => (
                <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
                ))
            }
        </Card>
        </div>
    );
}

export default Expenses;
