import './ResetButton.css';

export default function ResetButton(props) {
    function clickHandler() {
        props.onResetClick();
    }

    return (
        <button type="reset" className="buttonAlt" onClick={clickHandler}>
            Reset
        </button>
    );
}