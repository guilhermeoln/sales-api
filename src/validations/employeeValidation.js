import * as yup from "yup";

const employeeValidation = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
});

export default employeeValidation;
