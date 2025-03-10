import express from "express";
import cors from "cors";
import route from "./routes/route.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api", route);

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
