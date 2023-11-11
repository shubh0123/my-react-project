import "./ExpenditureDate.css";
export default function ExpenditureDate(props){
    const month=props.date.toLocaleString('en-US',{month:'long'}); //long,short,numeric,2-digit are options for month and day ,to get the month and day in the format we want 
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    const year=props.date.getFullYear();//getFullYear() is a method of Date object that returns the year of the date

    return(
        <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    );
}