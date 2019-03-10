import mongoose from 'mongoose';

const Schema = mongoose.Schema;

//TODO introduce rest of fields when set up is complete
const WalkSchema = new Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    startLocation: { type: String, required: true },
    endLocation: { type: String, required: true },
});

const Walk = mongoose.model( "Walk", WalkSchema );

export default Walk;
