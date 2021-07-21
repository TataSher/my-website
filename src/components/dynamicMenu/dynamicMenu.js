import React from "react";
import { useScrollSections } from "react-scroll-section";

export const DynamicMenu = () => {
  const sections = useScrollSections();

  return (
    <div id="menu">
      <ul>
        {sections.map(({ id, onClick, selected }) => (
          <ul key={id} onClick={onClick} selected={selected}>
            {id.toUpperCase()}
          </ul>
        ))}
      </ul>
    </div>
  );
};
