const express=require('express')
const router=express.Router()
const db=require('../db')
var cors = require('cors');

router.use(cors({
    origin: '*'
  }));

router.get('/',(req,res)=>{
    console.log('Get')
    db.any("SELECT * from logindetails")
    .then(rows=>{
        console.log(rows)
        res.json(rows)
    })
    .catch(error=>{
        console.log(error)
    })
})

router.post('/',(req,res)=>{
    console.log('post')
    db.one('select * from logindetails where email = $1', req.body.email)
    .then(function (data) {
       if(data.password==req.body.password){
        res.status(200).send({
            message:'Success'
        });
        }
        else{
            res.status(200).send({
                message: "Wrong Password",
        });
        }
    })
    .catch(function (err) {
        res.status(200).send({
            message: "User doesnt exist",
        });
    });
})

module.exports=router;