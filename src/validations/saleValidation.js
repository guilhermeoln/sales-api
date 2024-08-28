import * as yup from "yup";

const saleValidation = yup.object({
  date: yup.string().required(),
  price: yup.number().email().required(),
  employee: yup.string().required(),
  products: yup.array().of(yup.string()).required(),
});

export default saleValidation;
