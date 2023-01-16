import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import ticketService from "../../../services/ticket.service";
import { validator } from "../../../utils/validator";
import Button from "../../common/Button";
import { validatorConfig } from "./validatorConfig";

interface IData {
  name: string;
  email: string;
  message: string;
}

const initialState = {
  name: "",
  email: "",
  message: "",
};

interface IErrors {
  name?: string;
  email?: string;
  message?: string;
}

const fieldClasses: string =
  "border-2 border-rose-50 bg-white rounded-xl mb-3 p-1 h-12 focus:outline-0 ";

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
      className="self-center max-w-3xl md:w-fit w-80"
    >
      <h3 className="text-white mb-10 md:text-6xl text-2xl font-bold">
        Get touch with me
      </h3>
      <div className="flex flex-col">
        <input
          type="text"
          name="name"
          value={data.name}
          placeholder="Your name..."
          className={
            fieldClasses + (!errors.name ? "border-white" : "border-red")
          }
          onChange={handleChange}
        />
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
            "h-36 " +
            (!errors.message ? "border-white" : "border-red")
          }
          name="message"
          placeholder="Message..."
          onChange={handleChange}
        ></textarea>
        <Button>Send!</Button>
      </div>
    </form>
  );
};

export default ContactForm;
