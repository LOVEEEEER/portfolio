import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="mb-10 flex justify-center md:justify-start">
      {navLinks.map((navLink) => (
        <Button
          className="mr-2"
          onClick={() => navigate(navLink.path)}
          key={navLink.id}
        >
          {navLink.name}
        </Button>
      ))}
    </header>
  );
};

export default Header;
