import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses';
import expenses from "../fixtures/expenses"


test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});




// import React from 'react';
// import { shallow } from 'enzyme';
// import ExpenseSummary from '../../components/ExpenseSummary';


// test("render expense summary correctly", ()=>{
//     const wrapper = shallow(<ExpenseSummary />);
//     expect(wrapper).toMatchSnapshot();
// })
