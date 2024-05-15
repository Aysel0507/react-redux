const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = process.env.port || 3000;
const DB = process.env.DB_URL;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

mongoose
  .connect(DB)
  .then(() => {
    console.log("connected");
    app.listen(port, () => {
      console.log(`Example app listening on port:http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

const { Schema } = mongoose;

const productsSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", productsSchema);


//get all

app.get("/products", async (req, res) => {
  try {
    const products = await Products.find({});

    if (products.length > 0) {
      res.status(200).send({
        data: products,
        message: "success",
      });
    } else {
      res.status(204).send({
        message: "error",
        data: null,
      });
    }
  } catch (error) {
    res.send.status(500)({
      message: error.message,
    });
  }
});



//get by id

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const products = await Products.findById(id);
    if (products) {
      res.status(200).send({
        message: "success",
        data: products,
      });
    } else {
      res.status(204).send({
        message: "error",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});



//post

app.post("/products", async (req, res) => {
  const newProducts = new Products(req.body);
  await newProducts.save()
  res.send({
    message: "posted",
    response: newProducts,
  });
});



//delete

app.delete("/products/:id", async (req, res) => {
    const {id}=req.params
    try {
        const deletedProduct=await Products.findByIdAndDelete(id)
        const products=await Products.find({})
        res.send({
            message: 'success',
            deletedProduct: deletedProduct,
            allProducts: products
        })
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
});



//patch

app.patch("/products/:id",async(req,res)=>{
    const {id}=req.params
    try {
        await Products.findByIdAndUpdate(id,req.body)
        const updated=await Products.findById(id)
        res.send({
            message: "updated",
            data: updated,
          });
        } 
    catch (error) {
          res.status(500).send({
            message: error,
            error: true,
          });
    } 
})