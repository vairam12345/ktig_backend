const express = require("express");
const { createPayment,getPayments, updatePayment,deletePayment } = require("../../controllers/KtnlformControllers/KtnlInwardformController");


const router = express.Router();

// KTNL INWARD FORM Api Routes
router.get("/KTNL/Inwardform", getPayments);
router.post("/KTNL/Inwardform", createPayment);
router.put("/KTNL/Inwardform/:id", updatePayment);
router.delete("/KTNL/Inwardform/:id", deletePayment);
// KTNL INWARD FORM Api Routes






module.exports = router;






/////Post, Get,Put,Delete Api

////http://15.206.228.110:8081/KTNLInward/KTNL/Inwardform

//Delete Api

//http://15.206.228.110:8081/KTNLInward/KTNL/Inwardform/:id