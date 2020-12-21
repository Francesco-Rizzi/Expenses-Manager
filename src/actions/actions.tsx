import { IExpense } from "../reducers/types";
import { 
    actionTypes,
    ADD_EXPENSE_TYPE, 
    DELETE_EXPENSE_TYPE, 
    FETCH_EXPENSES_SUCCESS_TYPE, 
    FETCH_EXPENSES_TYPE, 
    SHOW_ERROR_TYPE 
} from "./types";

export const fetchExpenses = (): actionTypes => ({
    type: FETCH_EXPENSES_TYPE
});

export const fetchExpensesSuccess = (expenses: IExpense[]): actionTypes => ({
    type: FETCH_EXPENSES_SUCCESS_TYPE,
    expenses
});

export const addExpense = (newExpense: IExpense): actionTypes => ({
    type: ADD_EXPENSE_TYPE,
    newExpense
});

export const deleteExpense = (expenseId: number): actionTypes => ({
    type: DELETE_EXPENSE_TYPE,
    expenseId
});

export const showError = (error: string): actionTypes => ({
    type: SHOW_ERROR_TYPE,
    error
});