import styles from './ResultTableBody.module.css';
import TableResultItem from './TableResultItem';

export default function ResultTableBody(props) {
    return (
        <tbody className={styles.tbody}>
            {props.data.map((item) => (
                <TableResultItem key={item.year} itemData={item}/>
            ))}  
        </tbody>
    );
}