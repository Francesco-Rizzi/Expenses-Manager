export interface IAppState {
    expenses: IExpense[],
    error: string | null,
    loading: boolean
}

export interface IExpense {
    id?: number,
    name: string,
    date: string,
    amount: number,
    recipient: string,
    currency: string,
    type: string
}