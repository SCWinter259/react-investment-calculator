import styles from './InputForm.module.css'
import InputField from './InputField';
import Actions from './Actions';
import { useState } from 'react';

// This component is the whole input form

export default function InputForm(props) {
    const [currentSavings, setCurrentSavings] = useState('');
    const [yearlyContribution, setYearlyContribution] = useState('');
    const [expectedReturn, setExpectedReturn] = useState('');
    const [duration, setDuration] = useState('');

    function currentSavingsChangeHandler(event) {
        setCurrentSavings(event.target.value);
    }

    function yearlyContributionChangeHandler(event) {
        setYearlyContribution(event.target.value);
    }

    function expectedReturnChangeHandler(event) {
        setExpectedReturn(event.target.value);
    }

    function durationChangeHandler(event) {
        setDuration(event.target.value);
    }

    function resetHandler() {
        console.log("resetHandler Executed!");
        setCurrentSavings('');
        setYearlyContribution('');
        setExpectedReturn('');
        setDuration('');
    }

    function formSubmitHandler(event) {
        console.log("formSubmitHandler Executed!");
        event.preventDefault();

        const data = {
            "current-savings": currentSavings,
            "yearly-contribution": yearlyContribution,
            "expected-return": expectedReturn,
            "duration": duration
        }

        console.log(data);
        props.onCalculate(data);
        resetHandler();
    }

    return (
        <form className={styles.form} onSubmit={formSubmitHandler}>
            <div className={styles.inputGroup}>
                <InputField 
                    id="current-savings" 
                    labelName="Current Savings ($)"
                    onValueChange={currentSavingsChangeHandler}
                />
                <InputField 
                    id="yearly-contribution" 
                    labelName="Yearly Savings ($)"
                    onValueChange={yearlyContributionChangeHandler}
                />
            </div>
            <div className={styles.inputGroup}>
                <InputField 
                    id="expected-return" 
                    labelName="Expected Interest (%, per year)"
                    onValueChange={expectedReturnChangeHandler}
                />
                <InputField 
                    id="duration" 
                    labelName="Investment Duration (years)"
                    onValueChange={durationChangeHandler}
                />
            </div>
            <Actions onReset={resetHandler}/>
        </form>
    );
}