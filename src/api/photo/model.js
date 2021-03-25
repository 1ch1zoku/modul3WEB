import {Schema, model } from 'mongoose';

const photoSchema = new Schema({
    id: String,
    author: String,
    name: String,
    description: String,
    url: String,
    list_hashtags: [String],
    date: Date,
    count_likes: Number,
    list_comments: [String]
});

const Photo = model("photo", photoSchema);

export default Photo;