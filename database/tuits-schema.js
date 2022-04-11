import mongoose from 'mongoose';

const schema = mongoose.Schema({
    tuit: String,
    likes: {type: Number,default: 0},
    dislikes: {type: Number, default: 0},
    postedBy: {
        username: {type: String, default: 'Jose'}
    },
    image: {type: String, default: "/images/jose.jpeg"},
    liked: false,
    disliked: false,

}, {collection: 'tuits'});
export default schema;