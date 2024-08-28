import { model, Schema } from "mongoose";

const EmployeeSchema = new Schema({
  name: String,
  email: String,
});

export default model("Employee", EmployeeSchema);
