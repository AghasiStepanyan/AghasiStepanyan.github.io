import React from "react";
import Menu from "../menu/menu";
export default class Nav extends React.Component {
  state = {
    list: [
      { text: "Home" },
      { text: "About" },
      { text: "Work" },
      { text: "Pricing" },
      { text: "Contact" },
    ],
  };

  render() {
    console.log("render");
    return (
      <div>
        <Menu list={this.state.list} />
      </div>
    );
  }
}
