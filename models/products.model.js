const mongoose = require("mongoose");

// new - a instance that refersh everytime an new data comes
// it will refresh the key names, and won't allow to merge the previous value
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}
);

const Product = mongoose.model("products", productSchema);
module.exports = Product;