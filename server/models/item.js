import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
    itemName: String,
    date: String,
    price: Number,
    favorite: Boolean,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const Item = mongoose.model('Item', itemSchema);

export default Item;