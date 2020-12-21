import React from 'react';
import { useSelector } from 'react-redux';
import { getLoading, getExpenses } from '../../selectors/selectors';
import Expense from '../expense/Expense';
import './ExpenseList.css';

function ExpenseList() {

    const loading = useSelector(getLoading);
    const expenses = useSelector(getExpenses);

    const renderLoader = () => (
        <div className="appLoading">
            <div className="appLoader"></div>
        </div>
    );

    const renderBody = () => {
        if (!expenses.length) {
            return (
                <div className="appExpenseListEmpty">No expense has been saved yet.</div>
            );
        }
        
        return expenses.map(expense => <Expense key={expense.id} data={expense} />)
    };

    return (
        <div className="appExpenseList">
            <div className="appExpenseListTitle">Saved expenses:</div>
            {loading ? renderLoader() : renderBody()}
        </div>
    );
}

export default ExpenseList;
