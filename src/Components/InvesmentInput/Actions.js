import './Actions.css';
import CalculateButton from './CalculateButton';
import ResetButton from './ResetButton';

export default function Actions() {
    return (
        <p className="actions">
          <ResetButton/>
          <CalculateButton/>
        </p>
    );
}