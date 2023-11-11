import React from 'react';

import ExpenditureItem from './ExpenditureItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenditureItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          cost={expense.cost}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;