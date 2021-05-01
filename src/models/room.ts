import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: { type: String, required: true },
    messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", schema);

export { Room };
