import React from "react";
import { NoteForm, NoteFormEdit } from "./NoteForm/NoteForm";

export const NoteTable = ({ notes, updateNote, deleteNote }) => {
  return (
    <table className="table table-light table-stripped-column">
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
                <NoteFormEdit
                  updateNote={updateNote}
                  defaultNote={note}
                  label={"Update"}
                />
                <button onClick={() => deleteNote(note.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
