import { useState } from "react";
import InputSection from "./InputSection";
import ListItem from "./ListItem";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
  }

  function deleteItem(id) {
    setItems(
      items.filter((item, index) => {
        return index !== id;
      })
    );
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputSection addFunc={addItem} />
      {items.map((details, index) => {
        return (
          <ListItem
            key={index}
            id={index}
            item={details}
            deleteFunc={deleteItem}
          />
        );
      })}
      {items.length > 0 ? (
        <button
          onClick={() => {
            setItems([]);
          }}
        >
          <DeleteSweepIcon />
        </button>
      ) : null}
    </div>
  );
}

export default App;
