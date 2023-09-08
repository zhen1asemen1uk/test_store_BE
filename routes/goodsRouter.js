import express from "express";
// import { Router } from "express";

import goodsController from "../controllers/goodsController.js";

const goodsRouter = express.Router();

goodsRouter.get(`/`, goodsController.getAllGoods);

goodsRouter.get(`/search`, goodsController.searchGoods);

goodsRouter.get(`/filter`, goodsController.filterGoods);

goodsRouter.post(`/`, goodsController.addGoods);

export default goodsRouter;
