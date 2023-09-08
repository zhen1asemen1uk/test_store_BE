import { Schema, model } from "mongoose";

const goods = new Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    rate: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
});

export default model("goods", goods);
