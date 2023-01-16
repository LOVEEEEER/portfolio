import { ValidatorConfigType } from "../../../utils/validator";

export const validatorConfig: ValidatorConfigType = {
  email: {
    isRequired: {
      message: "Email is required!",
    },
    isEmail: {
      message: "email is not correct!",
    },
  },
  message: {
    isRequired: {
      message: "Message is required!",
    },
  },
};
