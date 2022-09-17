const router = require("express").Router();
const apikeymiddleware = require("../middleware/apikey");

//router.use(apikeymiddleware);
router.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname) + "/index.html"); Using ExpressJs +NodeJs
  res.render("index", {
    title: "Home Page",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
  });
});

router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});

router.get("/api/products", apikeymiddleware, (req, res) => {
  res.json([
    { id: "123", product: "Chrome" },
    { id: "124", product: "Firefox" },
  ]);
});

module.exports = router;
