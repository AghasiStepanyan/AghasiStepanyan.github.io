import React from "react";
import "./navigation.js";
export default function Ul(props) {
  return (
    <div>
      <ul>
        {props.list &&
          props.list.map((item) => {
            return <li>{item.text}</li>;
          })}
      </ul>
    </div>
  );
}
