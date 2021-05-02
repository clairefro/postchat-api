import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import { handleErrors } from "./middleware/handleErrors";
import { router } from "./router";
import { validator } from "./middleware/validator";

config(); // get env vars from .env file

const app = express();
const PORT = process.env.PORT || 3000;

// body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// apply schema validation for incoming requests
app.use(validator);

// apply routes
app.use("/api/v1", router);

// apply error handler
app.use(handleErrors);

// connect to db and start server
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected.");
    })
    .then(() => {
      // start server
      app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`);
      });
    })
    .catch((e) => console.error(e));
} else {
  console.error(
    "Missing env var MONGO_URI. Could not connect to database. Aborting server start."
  );
}
