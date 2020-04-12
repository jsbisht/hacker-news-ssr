import fs from "fs";
import path from "path";
import { template } from "../../pages/home/index";
import { SSR_FEED_TAG } from "../../utility/constants";

function homeRouteHandler(req, res) {
  fs.readFile(path.resolve("./public/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error occured while loading page");
    }
    return res.send(data.replace(SSR_FEED_TAG, template));
  });
}

export default homeRouteHandler;
