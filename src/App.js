import { useState } from "react";
import "./App.css";

const messages = [
  "Face your WORK",
  "Dont die for YANSH",
  "Why you go leave TOTO fuck YANSH",
  "relationship no sweet if MONEY no dey",
];

function App() {
  const [step, setStep] = useState(1);

  function handleNext() {
    if (step < 4) setStep((s) => s + 1);
  }
  function handlePrev() {
    if (step > 1) setStep((s) => s - 1);
  }
  return (
    <>
      <div className="appBody">
        <div className="numberBox">
          <span className={step === 1 ?"active" : ""}>1</span>
          <span className={step === 2 ?"active" : ""}>2</span>
          <span className={step === 3 ?"active" : ""}>3</span>
          <span className={step === 4 ?"active" : ""}>4</span>
          
        </div>

        <div className="messagesBox">
          <span>{messages[step - 1]}</span>
        </div>

        <div className="buttonBox">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
}
export default App;
