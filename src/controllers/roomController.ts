import { Request, Response } from "express";
import { GeneralError, NotFound } from "../utils/errors";
import { Room } from "../models";

export class RoomController {
  async createRoom(req: Request, res: Response) {
    const { title } = req.body;
    try {
      const room = await Room.create({ title });
      res.send(room);
    } catch (e) {
      throw new GeneralError(JSON.stringify(e));
    }
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
