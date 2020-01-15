import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectedExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpensesSumamry = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
    const formattedExpeneseTotal = ' £' + numeral( expensesTotal / 100).format('0,0.00')

    return (
        <div>
            <h3>
                Viewing {expenseCount} {expenseWord} totalling {formattedExpeneseTotal}
            </h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectedExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
}

export default connect(mapStateToProps)(ExpensesSumamry);

// const ExpensesSumamry = (props) => (
//     <div>
//         <p>
//             Viewing {props.expenses.length + ' '} 
//             expenses totalling 
//             {' £' + numeral( selectExpensesTotal(props.expenses) / 100).format('0,0.00')}
//         </p>
//     </div>
// )

// const mapStateToProps = (state) => {
//     return {
//         expenses: selectedExpenses(state.expenses, state.filters)
//     };
// }

// export default connect(mapStateToProps)(ExpensesSumamry);