const router = require("express").Router();

const userRoutes = require("./api/userRoutes")

router.use("/user", userRoutes);

module.exports = router;