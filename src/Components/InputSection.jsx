import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function InputSection(props) {
  const [inputText, setInputText] = useState("");

  function changeHandler(event) {
    const triggerValue = event.target.value;
    setInputText(triggerValue);
  }
  function handleKeyDown(event) {
    const pressedKey = event.key;
    if (inputText === "" && pressedKey === "Enter") {
      alert("Type something into the input field");
    } else if (inputText !== "" && pressedKey === "Enter") {
      props.addFunc(inputText);
      setInputText("");
    }
  }

  return (
    <div className="form">
      <input
        type="text"
        onChange={changeHandler}
        onKeyDown={handleKeyDown}
        value={inputText}
        placeholder="Note"
      />
      <button
        onClick={() => {
          inputText === ""
            ? alert("Type something into the input field")
            : props.addFunc(inputText);
          setInputText("");
        }}
      >
        <AddCircleOutlineIcon />
      </button>
    </div>
  );
}
export default InputSection;
