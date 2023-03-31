const apiRouter = require("express").Router();

const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");

apiRouter.use("/user", userRoutes);
apiRouter.use("/post", postRoutes);

module.exports = apiRouter;
