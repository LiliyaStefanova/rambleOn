import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    walkId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

export default mongoose.model('Comment', commentSchema);