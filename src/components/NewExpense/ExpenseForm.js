import React , { useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
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
        setTitle('')
        setAmount('')
        setDate('')

    }
    return (<form onSubmit={submitHandler}>
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
            <button type='submit'>Add Expense</button>
        </div>
    </form>)

}

export default ExpenseForm