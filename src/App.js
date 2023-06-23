import { useState } from "react";
import Header from "./Components/Header/Header.js";
import InputForm from "./Components/InvesmentInput/InputForm.js";
import ResultTable from "./Components/InvestmentList/ResultTable.js";
import './index.css';

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    console.log("calculateHandler Executed!");
    // Should be triggered when form is submitted

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    const initialSavings = +userInput["current-savings"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      const totalInterest = currentSavings - initialSavings;
      yearlyData.push({
        year: i + 1,
        savingsEndOfYear: currentSavings,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        yearlyContribution: yearlyContribution
      });
    }

    // do something with yearlyData ...
    setYearlyData(yearlyData);

    console.log(yearlyData);
  };

  return (
    <div>
      <Header/>
      <InputForm onCalculate={calculateHandler}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ResultTable data={yearlyData}/>
    </div>
  );
}

export default App;