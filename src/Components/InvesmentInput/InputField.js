import styles from './InputField.module.css';

export default function InputField(props) {
    return (
        <div className={styles.boxGroup}>
            <label className={styles.textBoxLabel} htmlFor={props.id}>{props.labelName}</label>
            <input className={styles.textBox} type="number" id={props.id} />
        </div>
    );
}