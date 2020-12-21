import { IExpense } from "../reducers/types";

export const FETCH_EXPENSES_TYPE = "FETCH_EXPENSES";
export const FETCH_EXPENSES_SUCCESS_TYPE = "FETCH_EXPENSES_SUCCESS";
export const ADD_EXPENSE_TYPE = "ADD_EXPENSE";
export const ADD_EXPENSE_SUCCESS_TYPE = "ADD_EXPENSE_SUCCESS";
export const DELETE_EXPENSE_TYPE = "DELETE_EXPENSE";
export const DELETE_EXPENSE_SUCCESS_TYPE = "DELETE_EXPENSE_SUCCESS";
export const SHOW_ERROR_TYPE = "SHOW_ERROR";

export interface FetchExpensesAction {
    type: typeof FETCH_EXPENSES_TYPE
}

export interface FetchExpensesSuccessAction {
    type: typeof FETCH_EXPENSES_SUCCESS_TYPE,
    expenses: IExpense[]
}

export interface AddExpenseAction {
    type: typeof ADD_EXPENSE_TYPE,
    newExpense: IExpense
}

export interface DeleteExpenseAction {
    type: typeof DELETE_EXPENSE_TYPE,
    expenseId: number
}

export interface ShowErrorAction {
    type: typeof SHOW_ERROR_TYPE,
    error: string
}

export type actionTypes =
    FetchExpensesAction
    | FetchExpensesSuccessAction
    | AddExpenseAction
    | DeleteExpenseAction
    | ShowErrorAction;