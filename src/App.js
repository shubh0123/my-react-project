import Expenses from "./components/Expenses";
import NewForm from "./components/NewForm";
import {useState} from "react";
let DummyItem=[
  {
    "title":"car",
    "date":new Date(2021,2,28),
    "cost":123
  },
  {
    "title":"car",
    "date":new Date(2020,1,28),
    "cost":147
  },
  {
    "title":"car",
    "date":new Date(2019,2,28),
    "cost":345
  },
]
function App(){
 
  const [expenses,setNewExpenses]= useState(DummyItem);
    const getFormData=(enteredExpenesData)=>{
      console.log(enteredExpenesData);
        setNewExpenses((prevExpenses)=>{

          return [enteredExpenesData,...prevExpenses]
        });
    }
   



  return(
  <div >
 
    <NewForm onSubmitHandler={getFormData}></NewForm>
      <Expenses item={expenses}></Expenses>
  </div>
  );
}

export default App;
