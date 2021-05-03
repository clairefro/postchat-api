import { Router } from "express";
import { buildControllers } from "./buildControllers";
import { asyncHandler } from "./utils/asyncHandler";

const router = Router();

const { roomController, messageController } = buildControllers();

// Rooms -----------------------------
router.post("/rooms", asyncHandler(roomController.createRoom));

router.get("/rooms/:roomId", asyncHandler(roomController.getRoom));

// Messages --------------------------
router.post(
  "/rooms/:roomId/message",
  asyncHandler(messageController.createMessage)
);

// Root ------------------------------
router.get("/", (_req, res) => {
  res.send({
    message:
      "Welcome to the Postchat API! To send a message. make a POST request to /api/v1/rooms/{roomId}/messages with a { 'text': 'your message', 'username': 'your username'  } body. You can get the roomId from your instructor.",
  });
});

export { router };
