import { Request, Response } from "express";
import { NotFoundError, ServerError } from "../utils/errors";
import { Room } from "../models";

export default class RoomController {
  async createRoom(req: Request, res: Response) {
    const { title } = req.body;
    try {
      const room = await Room.create({ title });
      res.send(room);
    } catch (e) {
      throw new ServerError(JSON.stringify(e));
    }
  }

  async getRoom(req: Request, res: Response) {
    const {
      params: { roomId },
    } = req;
    try {
      const room = await Room.findOne({ _id: roomId })
        .populate("messages")
        .exec();
      if (!room) throw new NotFoundError(`No room with id: ${roomId} found.`);

      res.send(room);
    } catch (e) {
      throw new ServerError(
        `Something went wrong when fetching room with id: ${roomId}`,
        e
      );
    }
  }
}
