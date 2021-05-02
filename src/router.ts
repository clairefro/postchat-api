import { Router } from "express";

import { buildControllers } from "./buildControllers";

import { asyncHandler } from "./utils/asyncHandler";

const router = Router();

const { roomController } = buildControllers();

// Rooms -----------------------------
router.post("/rooms", asyncHandler(roomController.createRoom));

// Root ------------------------------
router.get("/", (_req, res) => {
  res.send({
    message:
      "Welcome to the Postchat API! To send a message. make a POST request to /api/v1/rooms/{roomId} with a { message: 'string' } body. You can get the roomId from your instructor.",
  });
});

export { router };
