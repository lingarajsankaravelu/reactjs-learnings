import React from 'react';
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const savedExpenseDataHandler =(enteredExpenseData) => {
        props.nSavedNewExpense({...enteredExpenseData})
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSavedExpenseData={savedExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;
