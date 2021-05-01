import mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    room: { type: Schema.Types.ObjectId, ref: "Room", required: true },
    text: { type: String, required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", schema);

export { Message };
