import './Actions.css';
import CalculateButton from './CalculateButton';
import ResetButton from './ResetButton';

export default function Actions(props) {
    function resetClickHandler() {
      console.log("resetClickHandler Executed!");
      props.onReset();
    }

    return (
        <p className="actions">
          <ResetButton onResetClick={resetClickHandler}/>
          <CalculateButton/>
        </p>
    );
}