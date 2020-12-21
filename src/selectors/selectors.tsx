import { IAppState } from "../reducers/types";

export const getExpenses = (state: IAppState) => state.expenses;

export const getLoading = (state: IAppState) => state.loading;

export const getError = (state: IAppState) => state.error;