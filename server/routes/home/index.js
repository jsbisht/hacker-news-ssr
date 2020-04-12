import fs from "fs";
import path from "path";
import getHomePage from "../../pages/home/index";
import { SSR_STORIES_TAG } from "../../utility/constants";

async function homeRouteHandler(req, res) {
  const template = await getHomePage();

  fs.readFile(path.resolve("./public/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error occured while loading page");
    }
    return res.send(data.replace(SSR_STORIES_TAG, template));
  });
}

export default homeRouteHandler;
