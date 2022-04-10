import mongoose from 'mongoose';

const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    dislikes: {type: Number, default: 0},
    postedBy: {
        username: String
    }
}, {collection: 'tuits'});
export default schema;