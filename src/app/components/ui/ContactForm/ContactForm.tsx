import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import ticketService from "../../../services/ticket.service";
import { validator } from "../../../utils/validator";
import Button from "../../common/Button";
import { validatorConfig } from "./validatorConfig";

interface IData {
  email: string;
  message: string;
}

const initialState = {
  email: "",
  message: "",
};

interface IErrors {
  email?: string;
  message?: string;
}

const fieldClasses: string =
  "border-2 border-rose-50 bg-transparent text-white rounded-xl mb-3 p-1 h-12 focus:outline-0 ";

const ContactForm = () => {
  const [data, setData] = useState<IData>(initialState);
  const [errors, setErrors] = useState<IErrors>({});

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      const errors = validator(data, validatorConfig);
      setErrors(errors);
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      const ticket = {
        ...data,
        id: nanoid(),
      };
      try {
        await ticketService.put(ticket.id, ticket);
        setData(initialState);
        toast("🦄 Successfully!");
      } catch (error) {
        toast.error("Failed to send ticket!");
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ): void => {
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="self-center max-w-3xl xl:ml-32 lg:ml-8 md:ml-4 md:mr-4 md:w-fit w-80"
    >
      <h3 className="text-white mb-10 md:text-6xl text-4xl font-bold text-center md:text-left">
        Get touch with me
      </h3>
      <div className="flex flex-col">
        <input
          type="text"
          name="email"
          placeholder="Your E-mail..."
          value={data.email}
          onChange={handleChange}
          className={
            fieldClasses + (!errors.email ? "border-white" : "border-red")
          }
        />
        <textarea
          className={
            fieldClasses +
            "h-44 " +
            (!errors.message ? "border-white resize-none" : "border-red")
          }
          name="message"
          value={data.message}
          placeholder="Message..."
          onChange={handleChange}
        />
        <Button>Send!</Button>
      </div>
    </form>
  );
};

export default ContactForm;
