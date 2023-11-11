import { useState } from "react";
import './ExpenditureForm.css';
export default function ExpenditureForm( props){//Here props is used to get the function as a prop from NewForm to transfer form data from child to parent
    const [enteredTitle,setEnteredTitle]=useState('');//useState is a react hook that returns an array with 2 elements,1st element is the current state value and 2nd element is a function that allows us to update the state value
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();//this prevents the default behaviour of the form which is to send a request to the server and reload the page
        const expenseData={
            title:enteredTitle,
            cost:+enteredAmount,//+ is used to convert the string to a number
            date:new Date(enteredDate)
        };
       props.onSubmitHandler(expenseData)//passing forms data as a object from Expenditure Form to NewForm(child to parent)
        setEnteredTitle('');//this is used to clear the input fields after the form is submitted and this is called 2 way binding
        setEnteredAmount('');
        setEnteredDate('');
      
    }

    return(
        <div>
            <form onSubmit={submitHandler} >
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01"value={enteredAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2021-01-01" max="2025-12-31"value={enteredDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    );
}