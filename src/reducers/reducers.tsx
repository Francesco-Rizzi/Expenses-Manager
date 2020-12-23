import { 
    actionTypes, 
    ADD_EXPENSE_TYPE, 
    DELETE_EXPENSE_TYPE, 
    FETCH_EXPENSES_SUCCESS_TYPE, 
    FETCH_EXPENSES_TYPE, 
    SHOW_ERROR_TYPE 
} from '../actions/types';
import { IAppState, IExpense } from './types';

const defaultState: IAppState = {
    expenses: [],
    loading: false,
    error: null
};

const sortExpenses = (expenses: IExpense[]) => 
    expenses.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

export default function rootReducer(state = defaultState, action: actionTypes) {
    switch (action.type) {
        case FETCH_EXPENSES_TYPE:
        case ADD_EXPENSE_TYPE:
        case DELETE_EXPENSE_TYPE:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_EXPENSES_SUCCESS_TYPE:
            return {
                ...state,
                loading: false,
                expenses: sortExpenses(action.expenses)
            };
        case SHOW_ERROR_TYPE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}