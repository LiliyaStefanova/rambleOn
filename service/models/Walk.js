import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const WalkSchema = new Schema({
    name: { type: String, required: true },
    startLocation: { type: String, required: true },
    endLocation: { type: String, required: true },
    distance: { type: Number, required: true },
    difficulty: { type: String },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default:Date.now() },
    notes: { type: String }
});

const Walk = mongoose.model( "Walk", WalkSchema );

export default Walk;
