const router = require("express").Router();
const { authenticateUser } = require("../../../middlewares/auth");
const { getAllCategory, createCategory, getOneCategory, updateCategory } = require("./controller");

router.get("/", authenticateUser, getAllCategory);
router.post("/", authenticateUser, createCategory);
router.get("/:id", authenticateUser, getOneCategory);
router.put("/:id", authenticateUser, updateCategory);

module.exports = router;
