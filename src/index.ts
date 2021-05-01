import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import { handleErrors } from "./middleware/handleErrors";
import { router } from "./router";

config();

const app = express();
const port = process.env.PORT || 3000;

// body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// apply routes
app.use("/api/v1", router);

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
      app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
      });
    })
    .catch((e) => console.error(e));
} else {
  console.error("Missing env var MONGO_URI. Could not connect to database.");
}
