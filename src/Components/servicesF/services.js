import React from "react";
import Paragraph from "./paragraph";
import TitleServices from "./titleServices";
import "./services.css";
import Menu from "../menu/menu";

export default function Services() {
  let list1 = [
    { text: "Home1111111" },
    { text: "About333" },
    { text: "Work" },
    { text: "Pricing" },
    { text: "Contact" },
  ];
  return (
    <div className="service">
      <TitleServices titleS={"Services"} />
      <TitleServices titleS={"Make Success for future"} />

      <Paragraph />
      <Menu list={list1} />
    </div>
  );
}
