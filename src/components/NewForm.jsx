import ExpenditureForm from "./ExpenditureForm";
import { useState } from "react";
import './NewForm.css';
export default function NewForm(props) {
    const getSubmitData=(enteredExpenseData)=>{

        const expenseData={
            ...enteredExpenseData,//... is a spread operator that is used to take all the properties of the object and add it to the new object
            id:Math.random().toString()//this is used to generate a random id for each expense item 
        }
        setExpenseForm(false)
      props.onSubmitHandler(expenseData)//passing forms data as a object from Expenditure Form to NewForm(child to parent)
        
    }
    const [addExpenseForm,setExpenseForm]=useState(false)
    const stopVisibilityHandler=()=>{
        setExpenseForm(false)
    }
    const visibleFormHandler=()=>{
        setExpenseForm(true);
    }
    return(
        <div className='new-expense'>
            {(!addExpenseForm)&&(<button onClick={visibleFormHandler}>Add Expense</button>)}
       { addExpenseForm &&(<ExpenditureForm onSubmitHandler={getSubmitData} onCancel={stopVisibilityHandler}/>)}
        </div>
    );
}