import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense } from '../../actions/actions';
import { IExpense } from '../../reducers/types';
import { getLoading } from '../../selectors/selectors';
import './InputForm.css';

const initialFormData: IExpense = {
    amount: 0,
    name: "",
    date: "",
    recipient: "",
    currency: "",
    type: "",
};

function InputForm() {

    const dispatch = useDispatch();
    const loading = useSelector(getLoading);
    const [formData, setFormData] = useState<IExpense>(initialFormData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) {
            return;
        }
        dispatch(addExpense(formData));
        setFormData(initialFormData);
    };

    return (
        <div className="appInputs">
            <form onSubmit={handleSubmit}>

                <div className="appInputsRow">
                    <label>
                        Name
                        <input className="appInputName" type="text" name="name" onChange={handleChange} required value={formData.name} />
                    </label>

                    <label>
                        Amount
                        <input className="appInputAmount" step=".01" type="number" min={1} max={99999} name="amount" onChange={handleChange} required value={formData.amount ? formData.amount : ""} />
                    </label>

                    <label>
                        Currency
                        <select className="appInputCurrency" name="currency" onChange={handleChange} required value={formData.currency} >
                            <option value=""></option>
                            <option value="CHF">CHF</option>
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                        </select>
                    </label>
                </div>

                <div className="appInputsRow">
                    <label>
                        Date
                        <input className="appInputDate" type="date" name="date" onChange={handleChange} required value={formData.date} />
                    </label>

                    <label>
                        Recipient
                        <input className="appInputRecipient" type="text" name="recipient" onChange={handleChange} required value={formData.recipient} />
                    </label>

                    <label>
                        Type
                        <select className="appInputType" name="type" onChange={handleChange} required value={formData.type} >
                            <option value=""></option>
                            <option value="Food">Food</option>
                            <option value="Drinks">Drinks</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                </div>

                <div className="appInputButtonContainer">
                    <button type="submit" className="appInputButton" disabled={loading}>Create expense</button>
                </div>

            </form>
        </div>
    );
}

export default InputForm;
