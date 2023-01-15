import React from "react";
import { stackList } from "../../constants/stackList";

const AboutPage = () => {
  return (
    <main className="mb-10">
      <h1 className="text-white md:text-7xl md:mb-28 text-5xl mb-10">
        Frontend engineer and UI/UX enthusiast based in Russia. I have serious
        passion for responsive UI, animations and creating intuitive, dynamic
        UX. I aim to create websites where motion and interaction are perfectly
        integrated to form a unique experience.
      </h1>
      <div className="flex md:justify-between md:flex-row flex-col align-middle">
        <ul className="list-disc ml-3 mb-5">
          {stackList.map((item) => (
            <li className="text-white text-2xl" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
        <div className="ml-3">
          <p className="text-white text-2xl max-w-text-max mr-20 mb-5">
            Get in touch with me. I'm always interested about cool stuff. Are
            you minding a project? Let's discuss your project and see how we can
            turn it into an amazing experience
          </p>
          <a
            className="text-white hover: cursor-pointer text-2xl"
            href="https://t.me/hatesLov"
          >
            Contact me
          </a>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
