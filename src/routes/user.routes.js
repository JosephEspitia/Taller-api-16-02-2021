const express = require("express");
const router = express.Router();

const uControllers = require("../controllers/user.controllers");

router.post("/createUsuary", uControllers.createUsuary);
router.delete("/deleteUsuary/:id", uControllers.deleteUsuary);
router.put("/updateUsuary/:id", uControllers.UpdateUsuary);
router.get("/getUsuary", uControllers.getUsuary);
router.get("/loginUsuary", uControllers.loginUsuary);

module.exports=router;

