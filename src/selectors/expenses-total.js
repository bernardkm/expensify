import React from "react";

//input is the store values.  
// input should also be an array.  That array has objects as values.
//It probably needs to be jsx as that is the product we are looking for
//look at 
//total should return just simply the number from expense
//four expenses totalling whatever

const getExpensesTotal = (expenses) => {
    return expenses
    .map((expense)=> expense.amount)
    .reduce((a, b) => a + b, 0)
}

export default getExpensesTotal