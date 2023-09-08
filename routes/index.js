import { Router } from "express";

import goodsRouter from "./goodsRouter.js";
import goodsController from "../controllers/goodsController.js";

const router = Router();

router.use("/api/goods", goodsRouter);

router.get("/", (req, res) => {
    res.send("Server is running ✨");
});

export default router;
