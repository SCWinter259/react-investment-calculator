import { useState } from 'react';
import styles from './InputField.module.css';

// This component is the text box in the form and the label for it

export default function InputField(props) {
    const [userInput, setUserInput] = useState('');

    function userInputChangeHandler(event) {
        setUserInput(event.target.value);
        props.onValueChange(event);
    }

    return (
        <div className={styles.boxGroup}>
            <label className={styles.textBoxLabel} htmlFor={props.id}>{props.labelName}</label>
            <input 
                className={styles.textBox} 
                type="number" 
                id={props.id} 
                value={userInput}
                onChange={userInputChangeHandler}/>
        </div>
    );
}