let router=require("express").Router();
const checkSeat = require("../Function/FreeSeat");
let {Busdetails,busdetails1,busdetails2,busdetails3}= require("../Model/BusModel");


router.post("/seat",async (req,res,next)=>{
    return checkSeat(req,res);
})
router.get("/Bus_details", (req, res, next) => {
    async function getBus(params) {
        
        try {
            let dataBus = await Busdetails.find({})
            res.send({ data: dataBus ,ok:true});
        } catch (err) {
            res.status(500).send({ error: "An error occurred while fetching data" });
        }
    }
    getBus()
});


router.post("/book_Ticket",async (req,res,next)=>{
    let body=req.body;
    if(body.cab=="Bus - 1" && body.from == "pudukkottai" ){
        let save=await busdetails1.create(body);
        let data=await Busdetails.findOne({Bus:1});
        let copy={...data,booked:true}
        return checkSeat(req,res);
    }
    else if(body.cab=="Bus - 1" && body.from == "chennai" ){
        let save=await new busdetails1({...body,book:"true"});
        await save.save();
        let data=await Busdetails.findOne({Bus:1});
        return checkSeat(req,res);
    }
    else if(body.cab=="Bus - 2" && body.from == "pudukkottai" ){
        let save=await new busdetails2({...body,book:"true"});
        await save.save();
        let data=await Busdetails.findOne({Bus:2});
        return checkSeat(req,res);
    }else if(body.cab=="Bus - 2" && body.from == "chennai" ){
        let save=await new busdetails2({...body,book:"true"});
        await save.save();
        let data=await Busdetails.findOne({Bus:2});
        return checkSeat(req,res);
    }else if(body.cab=="Bus - 3" && body.from == "pudukkottai" ){
        let save=await new busdetails3({...body,book:"true"});
        await save.save();
        let data=await Busdetails.findOne({Bus:3});
        return checkSeat(req,res);
    }else if(body.cab=="Bus - 3" && body.from == "chennai" ){
        let save=await new busdetails3({...body,book:"true"});
        await save.save();
        let data=await Busdetails.findOne({Bus:3});
        return checkSeat(req,res);
    }
})

router.post("/check",async(req,res,next)=>{
  let insert= await new  Busdetails(req.body);
  let data=await insert.save()
    res.send("success")
})
module.exports ={router}