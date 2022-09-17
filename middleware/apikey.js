function apikey(req, res, next) {
  const api_key = "123456";
  // console.log(req.query.api_key);
  const userApikey = req.query.api_key;
  if (userApikey && userApikey === api_key) {
    next();
  } else {
    res.json({ message: "Not allowed!" });
  }
}

module.exports = apikey;
