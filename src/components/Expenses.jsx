import { useState } from "react";
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
export default function Expenses(props){

   const [filteredYear,setFilteredYear]=useState('2020');//useState is a react hook that returns an array with 2 elements,1st element is the current state value and 2nd element is a function that allows us to update the state value
   const filterDateHandler=(selectDate)=>{
         setFilteredYear(selectDate);
     
   }
   const filterdExpenses=props.item.filter(expense=>{
      return expense.date.getFullYear().toString()===filteredYear;//filter is a javascript function that is used to filter the array based on the condition that we provide in the function
   })

    return(
 <div>
   

   {/* Card is a wrapper component that we created to wrap the ExpenditureItem component and give it a border and a shadow 
    Wrapper components are components that wrap other components and configure them in some way and reduce duplicate code  */}
 <Card className="expenses"> 
    
   <ExpensesFilter selected={filteredYear} onFilterDate={filterDateHandler}></ExpensesFilter>
   <ExpenseChart expenses={filterdExpenses}/>
   <ExpenseList items={filterdExpenses}/>
   {/* {filterdExpenses.map((expense)=>(
        <ExpenditureItem key={expense.id}//key is used to identify each item uniquely and it is used by react to identify which item has changed and which item has not changed and it is used to optimize the rendering process
        //because react only check the length of the array and than checks the key of each item to see if it has changed or not and if it has changed than it only re renders that item and not the whole list
                     title={expense.title}
                     date={expense.date}
                     cost={expense.cost}
         ></ExpenditureItem>
      ))} */}

      {/* ********************************************************************************************************* */}
       {/* <ExpenditureItem title={props.item[0].title}
                    date={props.item[0].date}
                    cost={props.item[0].cost}
    ></ExpenditureItem>
           <ExpenditureItem title={props.item[1].title}
                    date={props.item[1].date}
                    cost={props.item[1].cost}
    ></ExpenditureItem>
           <ExpenditureItem title={props.item[2].title}
                    date={props.item[2].date}
                    cost={props.item[2].cost}
    ></ExpenditureItem> */}

 </Card>
 </div>
    );
}