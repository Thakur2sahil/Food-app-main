import Router from "express";
import authRoute from "../routes/authRoute/authRoute.js";
import contextRoute from "./contextRoute/contextRoute.js";
import userRoute from "./UserRoute/userRoute.js";

const route = Router();

route.use("/auth", authRoute);
route.use("/context", contextRoute);
route.use("/user", userRoute);

export default route;
