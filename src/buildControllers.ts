import { RoomController } from "./controllers/roomController";

export const buildControllers = () => {
  const roomController = new RoomController();
  return {
    roomController,
  };
};
