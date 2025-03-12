import Router from "express";
import authRoute from "../routes/authRoute/authRoute.js";
import contextRoute from "./contextRoute/contextRoute.js";

const route = Router();

route.use("/auth", authRoute);
route.use("/context", contextRoute);

export default route;
