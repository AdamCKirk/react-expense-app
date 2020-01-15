
const selectExpensesTotal = (expenses) => {
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
};

export default selectExpensesTotal;

// const selectExpensesTotal = (props) => {

//     let expenseAmounts = []
//     let amountTotal = 0;

//     for (let i =0; i < props.length; i++ ){
        
//         expenseAmounts.push(props[i].amount)

//         if (i+1 === props.length){
//             amountTotal = expenseAmounts.reduce( (total, num) => {return total + num} )
//         }
//     }

//     return amountTotal;
// }