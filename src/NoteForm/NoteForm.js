
import ChangeNoteModal from "./Modal";

export function NoteForm({addNote,updateNote,defaultNote,label}) {
  return (
    <>
      <form>
        <ChangeNoteModal addNote={addNote} updateNote={updateNote} defaultNote={defaultNote} label={label}/>
      </form>
    </>
  );
};