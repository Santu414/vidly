import React from "react";
import De from "prop-types";
const ListGroup = (props) => {
  const { items, textPerporty, valueProperty, onItemSelect, selectedItem } =
    props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textPerporty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textPerporty: "name",
  valueProperty: "_id",
};

export default ListGroup;
