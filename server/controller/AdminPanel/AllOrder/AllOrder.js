import { OrderHistory } from "../../../modal/Order/OrderHistoryModal.js";
import sequelize from "../../../sequlize.js";

const orderRequest = async (req, res) => {
  try {
    const orderData = await OrderHistory.findAll({
      where: {
        status: "Pending",
      },
      raw: true,
      attributes: {
        include: [
          [
            sequelize.literal(`
            (SELECT photo  FROM products WHERE id = order_history.product_id LIMIT 1)
          `),
            "photo",
          ],
          [
            sequelize.literal(`
            (SELECT name  FROM products WHERE id = order_history.product_id LIMIT 1)
          `),
            "name",
          ],
          [
            sequelize.literal(`
            (SELECT price  FROM products WHERE id = order_history.product_id LIMIT 1)
          `),
            "price",
          ],
          [
            sequelize.literal(`
            (SELECT total_amount  FROM cartamount WHERE order_id = order_history.order_id LIMIT 1)
          `),
            "totalamount",
          ],
        ],
      },
    });
    if (!orderData) {
      return res.status(400).json({ error: "Error fetching the data" });
    }

    return res
      .status(200)
      .json({ data: { ...orderData }, message: "Data fetch  sucessfully" });
  } catch (error) {
    return res.status(500).json({ error: "Data Base error" });
  }
};

export default orderRequest;
