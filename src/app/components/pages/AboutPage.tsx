import React from "react";
import { Link } from "react-router-dom";
import { stackList } from "../../constants/stackList";

const AboutPage = () => {
  return (
    <main className="mb-10">
      <h1 className="text-white md:text-7xl md:mb-16 text-5xl mb-10">
        <span className="text-white-selection">Frontend engineer</span> and{" "}
        <span className="text-white-selection">UI/UX enthusiast</span> based in
        Russia. I have serious passion for{" "}
        <span className="text-white-selection">
          responsive UI, animations and creating intuitive, dynamic UX
        </span>
        . I aim to create websites where motion and interaction are{" "}
        <span className="text-white-selection">
          perfectly integrated to form a unique experience.
        </span>
      </h1>
      <div className="flex md:justify-between md:flex-row flex-col align-middle">
        <ul className="md:list-disc list-none md:ml-3 mb-5">
          {stackList.map((item) => (
            <li className="text-white text-2xl" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
        <div className="md:ml-3">
          <p className="text-white text-2xl max-w-text-max mr-20 mb-5">
            Get in touch with me. I'm always interested about cool stuff. Are
            you minding a project? Let's discuss your project and see how we can
            turn it into an amazing experience
          </p>
          <Link
            className="text-white hover: cursor-pointer text-2xl hover:opacity-70 ease-in duration-200"
            to="/contact"
          >
            Contact me
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
