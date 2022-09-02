import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import routes from "./controller/index.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(routes);


app.listen(PORT, () => {
    console.log(`API is up & running on port ${PORT}`);
});