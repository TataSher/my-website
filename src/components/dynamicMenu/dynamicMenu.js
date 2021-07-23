import React from "react";
import { useScrollSections } from "react-scroll-section";

export const DynamicMenu = () => {
  const sections = useScrollSections();

  return (
    <div id="menu">
      <ul>
        {sections.map(({ id, onClick, selected }) => (
          <li className="item" key={id} onClick={onClick} selected={selected}>
            {id.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
};
