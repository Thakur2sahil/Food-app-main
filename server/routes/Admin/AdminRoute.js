import Router from "express";
import multer from "multer";
import AllProductInfo from "../../controller/AdminPanel/AllProduct/AllProductInfo.js";
import Rating from "../../controller/AdminPanel/Rating/Rating.js";
import ProductInfo from "../../controller/AdminPanel/ProductInfo/ProductInfo.js";
import UpdateProduct from "../../controller/AdminPanel/UpdateProduct/UpdateProduct.js";

const adminRoute = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

adminRoute.get("/allproduct", AllProductInfo);
adminRoute.get("/raiting/:id", Rating);
adminRoute.get("/productinfo/:id", ProductInfo);
adminRoute.put("/update-product", UpdateProduct);

export default adminRoute;
