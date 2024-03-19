import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NoteTable } from "./NoteTable";
import { NoteForm } from "./NoteForm/NoteForm";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Search } from "./Search";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  const [viewNotes, setViewNotes] = useState(notes)

  // it does not need a hook. A callable function would do the job......
  // useEffect(() => {
  //   if(notes!==JSON.parse(localStorage.getItem("notes"))){
  //       localStorage.setItem("notes", JSON.stringify(notes));
  //       console.log('h');}
  //   if(notes!==JSON.parse(localStorage.getItem("notes")))
  //        setNotes(JSON.parse(localStorage.getItem("notes")) || []);
  //   console.log("---");
  // }, [notes]);

  const storeOnLocal = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  useEffect(() => {
    document.title = "Mir-todo-app";
  }, []);
  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
    storeOnLocal(notes);
  };
  const updateNote = (updatedNote) => {
    const newNotes = notes.map((x) => {
      if (x.id === updatedNote.id) {
        x = updatedNote;
      }
      return x;
    });
    setNotes(newNotes);
    storeOnLocal(notes);
  };
  const deleteNote = (dId) => {
    setNotes(notes.filter((note) => note.id !== dId));
    storeOnLocal(notes);
  };
  return (
    <>
      <div className="container mt-5">
        {/* <ButtonToolbar className="mb-3" aria-label={"Toolbar with Button groups"}>
        <ButtonGroup>
          <NoteForm addNote={addNote} updateNote={updateNote}></NoteForm>
        </ButtonGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
      </ButtonToolbar> */}
       <ButtonToolbar className="mb-3 justify-content-between" aria-label={"Toolbar with Button groups"}>
        <ButtonGroup>
          <NoteForm addNote={addNote} updateNote={updateNote}></NoteForm>
        </ButtonGroup>
        <InputGroup>
          {/* <Form.Control
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          /> */}
        </InputGroup>
      </ButtonToolbar>
      <Search notes={notes} setViewNotes={setViewNotes}></Search>
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
