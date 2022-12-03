import React from "react";

export default function Btn(props) {
  return (
    <div>
      <button type="submit" className="btn-section">
        {props.btn}
      </button>
    </div>
  );
}
