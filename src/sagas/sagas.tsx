import { call, takeEvery, all, put, delay } from 'redux-saga/effects';
import {
    fetchExpenses,
    fetchExpensesSuccess,
    showError
} from '../actions/actions';
import {
    AddExpenseAction,
    DeleteExpenseAction,
    ADD_EXPENSE_TYPE,
    DELETE_EXPENSE_TYPE,
    FETCH_EXPENSES_TYPE
} from '../actions/types';
import Api from '../api/api';
import { IExpense } from '../reducers/types';

function* fetchExpensesSaga() {
    try {
        const res: IExpense[] = yield call(Api.fetchExpenses);
        yield delay(Math.random() * 2000);
        yield put(fetchExpensesSuccess(res));
    } catch (e) {
        yield put(showError(e));
    }
}

function* addExpensesaga(action: AddExpenseAction) {
    try {
        yield call(Api.addExpense, action.newExpense);
        yield put(fetchExpenses());
    } catch (e) {
        yield put(showError(e));
    }
}

function* deleteExpenseSaga(action: DeleteExpenseAction) {
    try {
        yield call(Api.deleteExpense, action.expenseId);
        yield put(fetchExpenses());
    } catch (e) {
        yield put(showError(e));
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(FETCH_EXPENSES_TYPE, fetchExpensesSaga),
        takeEvery(ADD_EXPENSE_TYPE, addExpensesaga),
        takeEvery(DELETE_EXPENSE_TYPE, deleteExpenseSaga),
    ]);
}