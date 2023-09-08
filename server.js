import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./db/index.js";
import router from "./routes/index.js";

const app = express();
const port = 5001;

app.use(
    cors({
        credentials: true,
        origin: "*", // change this to your production domain
    })
);
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(`public`));

app.use(router);

connectDB();

app.listen(port, () => {
    console.log(`Server started 🌈 : http://localhost:${port}`);
});
