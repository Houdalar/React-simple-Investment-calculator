import Header from "./components/Header";
import UserInputComponent from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [UserInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserIput) => {
      return {
        ...prevUserIput,
        [inputIdentifier]: +newValue,
      };
    });
  }

const inputIsValid = UserInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInputComponent UserInput={UserInput} onChange={handleChange} />
      {inputIsValid? <Result input={UserInput}/> : <p className="center">Please enter a duration greater than zero.</p>}
    </>
  );
}

export default App;
