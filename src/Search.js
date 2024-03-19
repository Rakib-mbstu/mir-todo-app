import { useState } from "react";
import Form from "react-bootstrap/Form";
import { SearchResult } from "./SearchResults";

export function Search({ notes , setViewNotes}) {
  const [searchItem, setSearchItem] = useState("");
  const handleInputSearch = (e) => {
    const searchItem = e.target.value;
    console.log(searchItem)
    setSearchItem(searchItem);
    const newnotes = notes.filter(note => {
        if(note.title.toLowerCase().includes(searchItem))
            return note;
    
    })
    setViewNotes(newnotes)
    
  };
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchItem)
  );
  return (
    <>
      <div className="">
      <input className="float-end mb-2"
        type="text"
        value={searchItem}
        onChange={handleInputSearch}
        placeholder="Type to Search"
      ></input>
      </div>
      {}
    </>
  );
}
