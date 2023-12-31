import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/product";

export default async function handle(req, res) {
  const method = req.method;
  await mongooseConnect();


  //get products
  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Product.findOne({ _id: req.query.id }));
    } else {
      res.json(await Product.find());
    }
  }

  //save product
  if (method === "POST") {
    const { title, description, price } = req.body;
    const productDoc = await Product.create({
      title,
      description,
      price,
    });
    res.json(productDoc);
  }


  //update products
  if (method === "PUT") {
    const { title, description, price, _id } = req.body;
    await Product.updateOne({ _id }, { title, description, price });
    res.json(true);
  }

  //delete product
  if(method === 'DELETE'){
    if (req.query?.id) {
      await Product.deleteOne({ _id: req.query?.id })
      res.json(true)
    } 
  }
}
