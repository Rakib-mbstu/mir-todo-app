import React from "react";
import { NoteFormEdit } from "./NoteForm/NoteForm";
import Button from "react-bootstrap/Button";
import { ButtonGroup } from "react-bootstrap";

export const NoteTable = ({ notes, updateNote, deleteNote }) => {
  return (
    <table className="table table-hover table-light table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Details</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note, i) => {
          return (
            <tr key={i}>
              <td>{note.title}</td>
              <td>{note.desc}</td>
              <td>{note.priority}</td>
              <td>{note.status}</td>
              <td>{note.createdAt}</td>
              <td>{note.updatedAt}</td>
              <td>
                <ButtonGroup>
                <NoteFormEdit
                  updateNote={updateNote}
                  defaultNote={note}
                  label={"Update"}
                />
                <Button
                  variant="outline-danger"
                  onClick={() => deleteNote(note.id)}
                >
                  Delete
                </Button>
                </ButtonGroup>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
