import styles from './TableResultItem.module.css';

export default function TableResultItem(props) {
    return (
        <tr className={styles.item}>
            <td>{props.itemData.year}</td>
            <td>{props.itemData.savingsEndOfYear}</td>
            <td>{props.itemData.yearlyInterest}</td>
            <td>{props.itemData.totalInterest}</td>
            <td>{props.itemData.yearlyContribution}</td>
        </tr>
    );
}