import { IExpense } from "../reducers/types";

const rootEndpoint = "http://localhost:5000";
const expensesEndpoint = rootEndpoint + '/expenses';

const Api = {
    fetchExpenses: () =>
        fetch(expensesEndpoint).then(res => res.json()),

    addExpense: (newExpense: IExpense) =>
        fetch(expensesEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newExpense)
        }).then(res => res.json()),

    deleteExpense: (id: number) =>
        fetch(`${expensesEndpoint}/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
};

export default Api;