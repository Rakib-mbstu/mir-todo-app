
import AddNoteModal from "./Modal";

export function NoteForm({addNote,updateNote}) {
  return (
    <>
      <form>
        <AddNoteModal addNote={addNote} updateNote={updateNote} label={"Add New Note"}/>
      </form>
    </>
  );
};
export function NoteFormEdit({updateNote,defaultNote,label}){
  return(
    <>
    <AddNoteModal updateNote={updateNote} defaultNote={defaultNote} label={label}></AddNoteModal>
    </>
  )
}