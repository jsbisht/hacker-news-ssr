import getHomePage from "../../pages/home/index";
import { SSR_STORIES_TAG } from "../../utility/constants";

async function homeRouteHandler(req, res) {
  const template = await getHomePage();

  const homepage = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Hacker News</title>
        <link rel="stylesheet" href="index.css" />
      </head>
      <body>
        <header>
          <div class="header-items header-items--logo-icon">Y</div>
          <div class="header-items header-items--stories-type selected-text">
            top
          </div>
          <div class="header-items header-items--stories-type">new</div>
        </header>
        <div id="root">
          <!--STORIES-->
        </div>
        <script src="./index.js"></script>
      </body>
    </html>`;

  res.send(homepage.replace(SSR_STORIES_TAG, template));
}

export default homeRouteHandler;
