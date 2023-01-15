import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <header className="mb-10">
      <Button className="mr-2">About</Button>
      <Button className="mr-2">Projects</Button>
      <Button>Contact</Button>
    </header>
  );
};

export default Header;
