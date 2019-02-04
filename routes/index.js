const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const isAuthenticated = require("../config/middleware/isAuthenticated");

// API Routes
router.use("/api", apiRoutes)

// router
//   .get("/user", isAuthenticated, function(req, res) {
//     // res.sendFile(path.join(__dirname, "../public/user-page.html"));
//     res.json(res)
//   });

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

module.exports = router;
