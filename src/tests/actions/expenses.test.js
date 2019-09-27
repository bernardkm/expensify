import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from "../fixtures/expenses"
import { doesNotReject } from 'assert';
import configureMockStore from "redux-mock-store"
import thunk from 'redux-thunk'
import datbase from '../../firebase/firebase'
import { database } from 'firebase';

const createMockStore = configureMockStore([thunk])

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});


test("should add expense to datbase and store", (done) =>{
  const store = createMockStore({})
  const expenseData={
      description: "Mouse",
      amount: 300,
      note: "This is better",
      createdAt: 1000
  };
//delete done and make sure test succeeds and then fails once put in
  store.dispatch(startAddExpense(expenseData)).then(()=>{
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense:{
        id: expect.any(String),
        ...expense
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})


test("should add expense to datbase and store", (done) =>{
  const store = createMockStore({})
  const expenseData={
      description: "",
      amount: 0,
      note: "",
      createdAt: 0
  };
//delete done and make sure test succeeds and then fails once put in
  store.dispatch(startAddExpense({})).then(()=>{
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense:{
        id: expect.any(String),
        ...expenseData
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot)=>{
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})
// test('should setup add expense action object with provided values', () => {
//   const expenseData = {
//     description: 'Rent',
//     amount: 109500,
//     createdAt: 1000,
//     note: 'This was last months rent'
//   };
//   const action = addExpense(expenseData);
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       ...expenseData,
//       id: expect.any(String)
//     }
//   });
// });

test('should setup add expense action object with default values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
    }
  );
});
