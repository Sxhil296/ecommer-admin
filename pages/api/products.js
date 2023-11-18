import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default async function handle(req, res) {
  // res.json(req.method)
  const method = req.method;
  await mongooseConnect();
  if (method === "POST") {
    const { title, description, price } = req.body;
    const productDoc = await Product.create({
      title,
      description,
      price,
    });
    res.json(productDoc);
  } else {
    res.status(405).json({ error: "Method Not Allowed" }); // Handling other HTTP methods
  }
}
