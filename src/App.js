import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NoteTable } from "./NoteTable";
import { NoteForm } from "./NoteForm/NoteForm";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import InputGroup from "react-bootstrap/InputGroup";
import { Search } from "./Search";
import { SortBy } from "./SortBy";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const [viewNotes, setViewNotes] = useState(notes);
  const [dir, setDir] = useState("asc");
  const storeOnLocal = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  useEffect(() => {
    document.title = "Mir-todo-app";
  }, []);
  useEffect(() => {
    setViewNotes(notes);
    storeOnLocal(notes);
  }, [notes]);
  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };
  const updateNote = (updatedNote) => {
    const newNotes = notes.map((x) => {
      if (x.id === updatedNote.id) {
        x = updatedNote;
      }
      return x;
    });
    setNotes(newNotes);
  };
  const deleteNote = (dId) => {
    const newNotes = notes.filter((note) => note.id !== dId);
    setNotes(newNotes);
  };
  return (
    <>
      <div className="container mt-5">
        <ButtonToolbar
          className="mb-3 justify-content-between"
          aria-label={"Toolbar with Button groups"}
        >
          <ButtonGroup>
            <NoteForm
              addNote={addNote}
              updateNote={updateNote}
              label={"Add New Note"}
            ></NoteForm>
          </ButtonGroup>
          <InputGroup>
            <Search notes={notes} setViewNotes={setViewNotes}></Search>
          </InputGroup>
        </ButtonToolbar>
        <SortBy
          notes={notes}
          setViewNotes={setViewNotes}
          dir={dir}
          setDir={setDir}
        ></SortBy>
        <br></br>
        <NoteTable
          notes={viewNotes}
          updateNote={updateNote}
          deleteNote={deleteNote}
        ></NoteTable>
      </div>
    </>
  );
}

export default App;
