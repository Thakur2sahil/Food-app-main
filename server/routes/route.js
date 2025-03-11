import Router from "express";
import authRoute from "../routes/authRoute/authRoute.js";

const route = Router();

route.use("/auth", authRoute);

export default route;
