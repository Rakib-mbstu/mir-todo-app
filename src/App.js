import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NoteTable } from "./NoteTable";
import { NoteForm } from "./NoteForm/NoteForm";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    setNotes(JSON.parse(localStorage.getItem("notes")) || []);
  }, [notes]);
  useEffect(() => {
    document.title = "Mir-todo-app";
  }, []);
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
    setNotes(notes.filter((note) => note.id !== dId));
  };
  return (
    <>
      <NoteForm addNote={addNote} updateNote={updateNote}></NoteForm>
      <br></br>
      <NoteTable
        notes={notes}
        updateNote={updateNote}
        deleteNote={deleteNote}
      ></NoteTable>
    </>
  );
}

export default App;
