const express = require("express");
const router = express.Router();

const { getAllusers, getAllusersTesting } = require("../controllers/user");
router.route("/").get(getAllusers);
router.route("/testing").get(getAllusersTesting);

module.exports = router;