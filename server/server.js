import express from "express";
import path from "path";
import { PORT } from "./utility/constants";
import initializeRoutes from "./routes";
import compression from "compression";

const app = express();

initializeRoutes(app);

app.use(compression());
app.use(express.static(path.resolve(__dirname, "..", "client")));

app.listen(process.env.PORT || PORT, () => {
  console.log(`Node server running at ${PORT}`);
});
