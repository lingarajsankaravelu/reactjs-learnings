import React , { useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    //Maintains state 1-> AddNewExpenses button show 2-> Add New Expenses form shown.
    const EXPENSE_STATE_ADD_NEW = 1;
    const EXPENSE_STATE_FILL_FORM = 2;
    const [expenseState, setExpenseState] = useState(EXPENSE_STATE_ADD_NEW);
    const [enteredTitle, setTitle] = useState('')
    const [enteredAmount, setAmount] = useState('')
    const [enteredDate, setDate] = useState('')
    const titleChanged = (event) => { setTitle(event.target.value) };
    const amountChanged = (event) => { setAmount(event.target.value)};
    const dateChanged = (event) => { setDate(event.target.value)};
    const submitHandler = (event) => {
        event.preventDefault()
        const  expenseData = {
            id:Math.random().toString(),
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        props.onSavedExpenseData({...expenseData})
        //console.log(expenseData)
        clearFields()
        setExpenseState(1);

    }

    const clearFields = () => {
        setTitle('')
        setAmount('')
        setDate('')
    }
    const cancelHandler = () => {
        clearFields()
        setExpenseState(EXPENSE_STATE_ADD_NEW);
    }

    const onAddNewExpenses = () => {
        setExpenseState(EXPENSE_STATE_FILL_FORM);
    }

    if (expenseState===EXPENSE_STATE_ADD_NEW) {
        return (<div className="add-new-expense__actions">
                <button onClick={onAddNewExpenses} >Add New Expense</button>
                </div>);
    }
    else {
        return (<form method="post" name="Expenses-form">
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle } onChange={titleChanged}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChanged}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2019-01-01" step="2022-12-31" onChange={dateChanged}/>
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type="cancel" onClick={cancelHandler}>Cancel</button>
                <button type='submit' onClick={submitHandler}>Add Expense</button>
            </div>
        </form>)
    }


}

export default ExpenseForm