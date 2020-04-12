import homeRouteHandler from "./home/index";

function initializeRoutes(app) {
  app.use("^/$", (req, res) => {
    homeRouteHandler(req, res);
  });
}

export default initializeRoutes;
