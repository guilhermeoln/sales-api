import { model, Schema } from "mongoose";

const SaleSchema = new Schema({
  date: String,
  price: Number,
  products: [String],
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  },
});

export default model("Sale", SaleSchema);
