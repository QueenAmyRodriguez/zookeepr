const router = require("express").Router();
const animalRoutes = require("../apiRoutes/apiRoutes");

router.use(animalRoutes);

module.exports = router;
