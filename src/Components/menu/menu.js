import React from "react";

export default function Menu(props) {
  return (
    <ul className="menu">
      {props.list &&
        props.list.map((item) => {
          return <li>{item.text}</li>;
        })}
    </ul>
  );
}
