import getHomePage from "../../pages/home/index";

async function homeRouteHandler(req, res) {
  const [template, stories] = await getHomePage();
  const startHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hacker News</title>
      <script>window.__INITIAL__DATA__ = ${JSON.stringify({
        stories,
      })}</script>
    </head>
    <body style="display: none">
      <header>
        <div class="header-items header-items--logo-icon">Y</div>
        <div class="header-items header-items--stories-type selected-text">
          top
        </div>
        <div class="header-items header-items--stories-type">new</div>
      </header>
      <div id="root">`;
  const endHtml = `
      </div>
      <script src="./index.js"></script>
    </body>
  </html>`;
  res.write(startHtml);
  const componentStream = template;
  componentStream.pipe(res, { end: false });
  componentStream.on("end", () => {
    res.write(endHtml);
    res.end();
  });
}

export default homeRouteHandler;
