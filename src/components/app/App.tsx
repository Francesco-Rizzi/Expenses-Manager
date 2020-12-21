import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpenses } from '../../actions/actions';
import { getError } from '../../selectors/selectors';
import InputForm from '../inputForm/InputForm';
import ExpenseList from '../expenseList/ExpenseList';
import './App.css';

function App() {

    const dispatch = useDispatch();
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchExpenses());
    }, [dispatch]);

    const renderError = () => {
        return (
            <div className="appError">Something went wrong. Please refresh the page or try again later.</div>
        );
    }

    const renderAppBody = () => {
        return (
            <div className="appBody">
                <InputForm />
                <ExpenseList />
            </div>
        )
    }

    return (
        <div className="appContainer">
            <div className="appTitle">Expenses Manager</div>
            {error === null ? renderAppBody() : renderError()}
        </div>
    );
}

export default App;
