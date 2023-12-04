import express from "express";
import { getProductsList, postProductItem } from "../controllers/productsController.js";

const router = express.Router();

router.get("/list", getProductsList);

router.post("/create", postProductItem);

export default router;
