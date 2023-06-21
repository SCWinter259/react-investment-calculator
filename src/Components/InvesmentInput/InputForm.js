import styles from './InputForm.module.css'
import InputField from './InputField';
import Actions from './Actions';

export default function InputForm() {
    return (
        <form className={styles.form}>
            <div className={styles.inputGroup}>
                <InputField id="current-savings" labelName="Current Savings ($)"/>
                <InputField id="yearly-contribution" labelName="Yearly Savings ($)"/>
            </div>
            <div className={styles.inputGroup}>
                <InputField id="expected-return" labelName="Expected Interest (%, per year)"/>
                <InputField id="duration" labelName="Investment Duration (years)"/>
            </div>
            <Actions/>
        </form>
    );
}