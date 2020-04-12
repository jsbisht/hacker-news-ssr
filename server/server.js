import express from "express";
import path from "path";
import { PORT } from "./utility/constants";
import initializeRoutes from "./routes";

const app = express();

initializeRoutes(app);

app.use(express.static(path.resolve(__dirname, "..", "public")));

app.listen(PORT, () => {
  console.log(`Node server running at ${PORT}`);
});
