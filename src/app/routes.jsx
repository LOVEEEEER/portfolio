import React from "react";
import About from "./layouts/About";
import Contact from "./layouts/Contact";
import Projects from "./layouts/Projects";

const routes = [
  {
    path: "",
    element: <About />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
];

export default routes;
