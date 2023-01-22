import React from "react";
import About from "./layouts/About";
import Contact from "./layouts/Contact";

const routes = [
  {
    path: "",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
];

export default routes;
