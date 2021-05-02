import { Router } from "express";

import { buildControllers } from "./buildControllers";

import { asyncHandler } from "./utils/asyncHandler";

const router = Router();

const { roomController } = buildControllers();

router.get("/", (_req, res) => {
  res.send("You're in");
});

// Rooms -----------------------------
router.post("/rooms", asyncHandler(roomController.createRoom));

export { router };
