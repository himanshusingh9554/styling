const express = require('express');

const router = express.Router();
import{contactuscontroller} from '../controllers/contactus'

router.get('/contactus',contactuscontroller);

router.get('/contactus' , (req,res,next)=>{
    res.redirect('/');
})
module.exports=router;