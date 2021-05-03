import { Request, Response } from "express";
import { NotFoundError } from "../utils/errors";
import { Message, Room } from "../models";

export default class MessageController {
  async createMessage(req: Request, res: Response) {
    const { text, username } = req.body;
    const { roomId } = req.params;

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

    res.send(message);
  }

  //   async getRoom(req, res) {
  //     const {
  //       params: { id },
  //     } = req;

  //     try {
  //       const room = await Room.findById(id).populate("questions").exec();
  //       res.send(publicRoom(room));
  //     } catch (e) {
  //       throw new NotFound(
  //         `Error when fetching room with id: ${id}. Error: ${JSON.stringify(e)}`
  //       );
  //     }
  //   }
}
