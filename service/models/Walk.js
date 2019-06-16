import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const WalkSchema = new Schema({
    _id: { type: ObjectId, required: true, unique: true },
    name: { type: String, required: true },
    startLocation: { type: String, required: true },
    endLocation: { type: String, required: true },
    distance: { type: Number, required: true},
    difficulty: { type: Number, required: false},
    startDate: { type: Date, required: true},
    endDate: {type: Date, required: true},
    summary: {type: String, required: false}
});

const Walk = mongoose.model( "Walk", WalkSchema );

export default Walk;
