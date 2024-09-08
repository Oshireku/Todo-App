import HighlightOffIcon from "@mui/icons-material/HighlightOff";
function ListItem(props) {
  return (
    <div>
      <ul>
        <li>
          {" "}
          {props.item}{" "}
          <HighlightOffIcon
            onClick={() => {
              props.deleteFunc(props.id);
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default ListItem;
