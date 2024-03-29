import "./App.css";
import {useState} from "react";
import kebabCaseToTitleCase from "./helpers.js";
function App() {
  const [checked, setChecked] = useState(false);
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const nestColorClass = buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const className = checked ? "gray" : buttonColor;
  const nextColorTitleCase = kebabCaseToTitleCase(nestColorClass);
  const handleClick = () => {
    setButtonColor(nestColorClass)
  };
  // 내 답변
  // const handleCheckbox = () => {
  //   setChecked(!checked);
  // };
  
  // 강사 답변
  const handleCheckbox = (e) => {
    setChecked(e.target.checked);
  };
  
  return (
    <div>
      <button className={className} onClick={handleClick} disabled={checked}>Change to {nextColorTitleCase}</button>
      <br />
      <input type="checkbox" id="disable-button-checkbox" checked={checked} onChange={handleCheckbox} />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
