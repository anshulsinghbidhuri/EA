const express= require("express");
const router= express.Router();

const app= express();
console.log("router loaded");
router.use("/products", require("./products"));
router.use("/admin", require("./admin"));

module.exports =router;