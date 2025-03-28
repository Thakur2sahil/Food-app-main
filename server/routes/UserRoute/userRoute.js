import Router from "express";
import multer from "multer";
import ProductCard from "../../controller/UserPanel/ProductCard/ProductCardController.js";
import ProductAdd from "../../controller/UserPanel/ProductAdd/ProductAddController.js";
import CartCount from "../../controller/UserPanel/CartCount/CartCount.js";

const userRoute = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

userRoute.get("/card", ProductCard);
userRoute.post("/card-add", ProductAdd);
userRoute.post("/cart-count", CartCount);

export default userRoute;
