import ExpenditureDate from './ExpenditureDate';
import React, {useState} from 'react';//useState is a react hook that allows us to manage state in functional components
import './ExpenditureItem.css';
import Card from './Card';
export default function ExpenditureItem(props){
    const [title,setTitle]=useState(props.title);//useState is a react hook that returns an array with 2 elements,1st element is the current state value and 2nd element is a function that allows us to update the state value
    //Each time when the component function is called. seperate state is maintained for each component so that chnges done
    //to the state of one component does not affect the state of another component
    //and the state is not lost when the component function is called again
    //and the initial value of the variable is assigned only when the component function is called for the first time
    //and when setTitle function is called the component function is called again and whole function will again be executed and the new value will be assigned to the variable
    
    const clickHandler=()=>{
     setTitle('Updated')// this function is used to update the state value 
      console.log(title);  
    }//this function is called when the button is clicked
    return (
        <Card className='expense-item'>
            <ExpenditureDate date={props.date}/>
            <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.cost}</div>
            </div>
            <button onClick ={clickHandler}>Change State</button>
        </Card>
    );
}