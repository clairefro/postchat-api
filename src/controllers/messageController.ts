import { Request, Response } from "express";
import { NotFoundError, ServerError } from "../utils/errors";
import { Message, Room } from "../models";

export default class MessageController {
  async createMessage(req: Request, res: Response) {
    const { text, username } = req.body;
    const { roomId } = req.params;
    try {
      const room = await Room.findOne({ _id: roomId });

      if (!room) throw new NotFoundError(`Room with id ${roomId} not found.`);

      const message = new Message({
        room: roomId,
        text,
        username,
      });

      await message.save();

      // persist message to room
      room.messages.push(message);
      await room.save();

      const io = req.app.get("io");
      io.in(roomId).emit("MESSAGE", message);

      res.send(message);
    } catch (e) {
      throw new ServerError(
        `Something went wrong when attempting to create message`,
        e
      );
    }
  }
}
