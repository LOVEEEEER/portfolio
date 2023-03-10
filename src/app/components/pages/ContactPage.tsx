import React from "react";
import ContactForm from "../ui/ContactForm/ContactForm";

const ContactPage = () => {
  return (
    <main className="md:flex border-dotted md:align-middle md:border-2 md:border-white">
      <div className="flex md:justify-start justify-center border-dotted md:border-r-2 border-white md:w-8/12 w-full mb-14 md:mb-0">
        <ContactForm />
      </div>
      <div className="md:py-36 pl-12">
        <h3 className="text-white mb-6 text-4xl">Socials</h3>
        <ul>
          <li>
            <a
              className="text-white text-lg hover:opacity-70 transition-all duration-400"
              href="https://github.com/LOVEEEEER"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="text-white text-lg hover:opacity-70 transition-all duration-400"
              href="https://www.linkedin.com/in/nikita-demyanenko-b5b36b259/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            {" "}
            <a
              className="text-white text-lg hover:opacity-70 transition-all duration-400"
              href="https://t.me/hatesLov"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              className="text-white text-lg hover:opacity-70 transition-all duration-400"
              href="https://vk.com/whatsfuckbro"
              target="_blank"
              rel="noreferrer"
            >
              VK
            </a>
          </li>
        </ul>
        <p className="text-white text-lg max-w-text-max mr-20 mb-5 w-72 mt-9">
          Get in touch with me. I'm always interested about cool stuff. Are you
          minding a project? Let's discuss your project and see how we can turn
          it into an amazing experience
        </p>
      </div>
    </main>
  );
};

export default ContactPage;
