const mongoose = require('mongoose');
const Food = mongoose.model('Food');

const sendJsonResponse = (res,status,content)=>{
    res.status(status);
    res.json(content);
}



module.exports.add = async (req,res)=>{
    const food = await new Food(req.body).save();
    sendJsonResponse(res,200,food);
}


module.exports.findAll = async (req,res)=>{
    const foods = await Food.find();
    sendJsonResponse(res,200,foods);
}

