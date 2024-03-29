
var mongoose= require("mongoose");

//write your schema Here with name of schema as productSchema
var productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    Quantity: {
        type: Number,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
    instock: {
        type: String,
        enum: ['Yes', 'No'],
        required: true,
    },
})

module.exports =mongoose.model("products",productSchema);
