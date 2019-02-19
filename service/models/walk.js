import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const walkSchema = new Schema({
    name: {type: String, required: true},
    start: {type: String},
    end: {type: String},
    distance: {type: Number},
    date: {type: Date, default: Date.now},
    notes: {type: String},
    resources: [{body: String}],
    participants: [{name: String}]
});

export default mongoose.model('Walk', walkSchema);