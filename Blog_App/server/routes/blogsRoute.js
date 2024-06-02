const { Router } = require("express");

const router = Router();
router.get("/", (req, res) => {
  res.send("This is the blogs route");
});

module.exports = router;
