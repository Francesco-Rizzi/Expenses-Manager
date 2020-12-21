import React from 'react';
import { ExpenseProps } from './types';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../actions/actions';
import './Expense.css';

function Expense(props: ExpenseProps) {

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteExpense(props.data.id!));
    }

    const getDate = () => {
        const date  = new Date(props.data.date);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    
    return (
        <div className="appExpense">
            <div className="appExpenseLeft">
                <div className="appExpenseAmount">{props.data.amount}</div>
                <div className="appExpenseCurrency">{props.data.currency}</div>
            </div>
            <div className="appExpenseRight">
                <div className="appExpenseName">{props.data.name}</div>
                <div className="appExpenseRightBottom">
                    <div className="appExpenseDate">{getDate()}</div>
                    <div className="appExpenseRecipient">{props.data.recipient}</div>
                    <div className="appExpenseType">{props.data.type}</div>
                </div>
            </div>
            <button className="appExpenseDelete" onClick={handleDelete}>&#x2715;</button>
        </div>
    );
}

export default Expense;