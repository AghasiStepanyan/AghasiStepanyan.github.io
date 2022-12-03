import React from "react";
import Nav from "./nav";
import Icon from "./icon";
import "./header.css";
import Title from "./title";
export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Title />
        <Nav />
        <Icon />
      </div>
    </div>
  );
}
