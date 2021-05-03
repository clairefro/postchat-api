import { MessageController, RoomController } from "./controllers";

export const buildControllers = () => {
  const roomController = new RoomController();
  const messageController = new MessageController();
  return {
    roomController,
    messageController,
  };
};
