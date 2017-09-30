const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const errorHandler = require('mongoose-mongodb-errors');
const md5 = require('md5');
const FoodSchema = new mongoose.Schema({
    title : {type:String, required: "Please Provide a post Title"},
    image : {type : String, required:true},
    description : {type:String, required: 'Please provide a post Description'},
    email : {type:String, required: "Please provide an Email Address"}
});

FoodSchema.plugin(errorHandler);

module.exports = mongoose.model('Food', FoodSchema);