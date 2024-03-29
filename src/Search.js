import { useState } from "react";

export function Search({ notes, setViewNotes }) {
  const [searchItem, setSearchItem] = useState("");
  const handleInputSearch = (e) => {
    const searchItem = e.target.value;
    console.log(searchItem);
    setSearchItem(searchItem);
    const newnotes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchItem) !== false ||
        note.desc.toLowerCase().includes(searchItem) !== false
    );
    setViewNotes(newnotes);
  };
  return (
    <>
      <div className="">
        <input
          className="float-end mb-2"
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
