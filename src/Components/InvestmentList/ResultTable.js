import styles from './ResultTable.module.css';
import ResulTableHead from './ResultTableHead';
import ResultTableBody from './ResulTableBody';

export default function ResultTable() {
    return (
        <table className={styles.result}>
            <ResulTableHead/>
            <ResultTableBody/>
        </table>
    );
}