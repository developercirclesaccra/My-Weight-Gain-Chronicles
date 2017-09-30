const mongoose = require('mongoose');
const Food = mongoose.model('Food');

const sendJsonResponse = (res,status,content)=>{
    res.status(status);
    res.json(content);
}



module.exports.add = async (req,res)=>{
    const food = await  new Food(req.body).save();
    sendJsonResponse(res,200,food);
}


