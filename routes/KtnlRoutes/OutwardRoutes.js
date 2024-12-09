const express = require("express");
const { createKTNLOutward,getKTNLOutwards, updateKTNLOutward,deleteKTNLOutward } = require("../../controllers/KtnlformControllers/KtnloutwardformController");


const router = express.Router();

// KTNL INWARD FORM Api Routes
router.get("/KTNL/Outwardform", getKTNLOutwards);
router.post("/KTNL/Outwardform", createKTNLOutward);
router.put("/KTNL/Outwardform/:id", updateKTNLOutward);
router.delete("/KTNL/Outwardform/:id", deleteKTNLOutward);
// KTNL INWARD FORM Api Routes






module.exports = router;






/////Post, Get,Put,Delete Api

////http://localhost:8081/KTNLInward/KTNL/Inwardform

//Delete Api

//http://localhost:8081/KTNLInward/KTNL/Inwardform/:id