import React, {useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";




const Expenses = (props) => {
    const [filter, setFilter] = useState(2021)

    const onFilterSelected = (filterSelection) => {
        setFilter(parseInt(filterSelection))
        console.log(filterSelection)

    }
    let filteredList = props.items.filter((expense) => { return (parseInt(expense.date.getFullYear()) === filter)})

    return (
        <li>
        <Card className="expenses">
            <ExpensesFilter selected={filter} classname="expenses-filter" filterSelected={onFilterSelected}/>
            <ExpensesList items={filteredList}/>
        </Card>
        </li>
    );
}

export default Expenses;
