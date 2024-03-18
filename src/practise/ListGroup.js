import { useState } from "react";

export function ListGroup({ names }) {
  const [selected, selectedIndex] = useState(-1);
  return (
    <>
      <h2>jfdsf</h2>
      <ul className="list-group">
        {names.map((nm, index) => (
          <li
            className={
              index === selected ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              selectedIndex(index);
              console.log(index);
            }}
            key={nm}
          >
            {nm}
          </li>
        ))}
      </ul>
    </>
  );
}
