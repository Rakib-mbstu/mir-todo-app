
import { useState } from "react";

export function SortBy({ notes, setViewNotes, dir, setDir }) {
  const [notesTill, SetNotesTill] = useState(notes);

  const handleSort = (event) => {
    let sortedNotes = [...notesTill];
    const givenValue = event.target.value;
    switch (givenValue) {
      case "title":
        sortedNotes.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "desc":
        sortedNotes.sort((a, b) => a.desc.localeCompare(b.desc));
        break;
      case "status":
        sortedNotes.sort((a, b) => a.status.localeCompare(b.status));
        break;
      case "priority":
        sortedNotes.sort((a, b) => a.priority - b.priority);
        break;
      default:
        break;
    }
    if (givenValue === "dsc" || givenValue === "asc") {
      if (givenValue !== dir) {
        sortedNotes = sortedNotes.reverse();
        setDir(givenValue);
      }
    }
    setViewNotes(sortedNotes);
    SetNotesTill(sortedNotes);
  };
  return (
    <>
      <div className="container">
        <form onChange={handleSort}>
          <label>Sort Notes By</label>
          <select name="sortBase">
            <option value="title">Title</option>
            <option value="desc">Description</option>
            <option value="priority">Priority</option>
            <option value="status">Status</option>
          </select>
          <label>Direction</label>
          <select name="order">
            <option value={"asc"}>&uarr;</option>
            <option value={"dsc"}>&darr;</option>
          </select>
        </form>
      </div>
    </>
  );
}
