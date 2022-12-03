import React from "react";
import Btn from "./btn";

export default function TitleSection() {
  return (
    <div className="title-section">
      <h1>
        HTML CSS Template
        <br />
        with Bootstrap
      </h1>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        <br />
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        <br />
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        <br />
        pariatur. Excepteur sint occaecat.
      </p>
      <Btn btn={"Get Started"} />
    </div>
  );
}
