const express=require('express')
// const getUser  = require('../controllers/ManageController')
// const updateUser  = require('../controllers/ManageController')
// const deleteUser=require('..//controllers/ManageController')

const {deleteTenant,findTenant,updateTenant,createTenant,getTenant}=require('../controllers/RentalControllers')

const router=express.Router()



router.post('/create', createTenant);
router.get('/find', findTenant);
router.get('/display/:id',getTenant)
router.put('/update/:id',updateTenant);
router.delete('/delete/:id', deleteTenant);


module.exports = router