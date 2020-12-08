import mongoose from 'mongoose';
import timeZone from 'mongoose-timezone'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default:0
    },
    createdAt:{
        type:Date,
        default: new Date(),
    },
});

postSchema.plugin(timeZone,{paths:["createdAt.type"]});
mongoose.model('Schema', postSchema);

const PostMessage = mongoose.model('PostMessage',postSchema);
export default PostMessage;