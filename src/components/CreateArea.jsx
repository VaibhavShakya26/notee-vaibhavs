import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, changeNote] = React.useState({
    title: "",
    content: "",
  });
  const [textCon, setTextCon] = React.useState(false);

  function handleNote(event) {
    const { name, value } = event.target;
    changeNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handlePress(event) {
    props.onAdd(note);
    changeNote({ title: "", content: "" });
    event.preventDefault();
  }

  function textConHandle(){
    setTextCon(true);
  }

  return (
    <div>
      <form className="create-note">
        {textCon && <input
          onChange={handleNote}
          name="title"
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          onClick={textConHandle}
          onChange={handleNote}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={textCon ? 3 : 1}
        />
        <Zoom in={textCon}>
        <Fab className="textAreaButton" onClick={handlePress}><AddIcon /></Fab>
          </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
