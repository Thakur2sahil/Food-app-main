import { Product } from "../../../modal/Product/ProductModal.js";

const UpdateProduct = async (req, res) => {
  const { payload } = req.body;

//   try {
//     let productdata = await Product.findOne({
//       where: { id: payload.id },
//       raw: true,
//     });

//     // productdata["name"] = payload.name;
//     // productdata["price"] = payload.price;
//     // productdata["category"] = payload.category;
//     // productdata["description"] = payload.description;
//     // productdata["description"] = payload.description;
//     // productdata["discount"] = payload["discount"];
//     if (payload.photo && payload.drg_file_data) {
//       const base64Data = payload.drg_file_data.split(",")[1];
//       const fileBuffer = Buffer.from(base64Data, "base64");
//       isFileExist(`${process.cwd()}/assets/uploads/${productdata["photo"]}`);
//       writeFile(
//         path.join(process.cwd(), "uploads/" + payload.photo),
//         fileBuffer
//       )
//         .then(() => console.log("--file uploaded successfully--"))
//         .catch((err) => console.log("error uploading file: ", err));

//       productdata["photo"] = payload.photo;
//     } else {
//       productdata["photo"] = payload.photo || null;
//     }
//     console.log(productdata);
//   } catch (error) {
//     console.log(error);
//   }
};

export default UpdateProduct;
