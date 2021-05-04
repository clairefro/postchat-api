/** Establish core socket funcionality */

import { Server, Socket } from "socket.io";
import { addUser, getUser, deleteUser } from "./users";

export const initCore = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log("User connected...");

    socket.on("USER_JOINED", ({ roomId }) => {
      const { error } = addUser({ id: socket.id, roomId });
      if (error) {
        console.error(error);
      } else {
        socket.join(roomId);
        console.log(`User ${socket.id} joined room ${roomId}`);
      }
    });

    socket.on("SEND_MESSAGE", (message) => {
      const user = getUser(socket.id);
      if (user) {
        io.in(user.roomId).emit("MESSAGE", { message });
      } else {
        console.error(`User entry for socket id ${socket.id} not found`);
      }
    });

    socket.on("DISCONNECT", () => {
      console.log(`User ${socket.id} disconnected`);
      deleteUser(socket.id);
    });
  });
};
