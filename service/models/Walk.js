import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const WalkSchema = new Schema({
    name: { type: String, required: true },
    startLocation: { type: String, required: true },
    endLocation: { type: String, required: true },
    distance: { type: Number, required: true},
    difficulty: { type: Number, required: false},
    startDate: { type: Date, required: true},
    endDate: {type: Date, required: true},
    summary: {type: String, required: false}
}, {collection: 'walks', timestamps: true });

WalkSchema.virtual('id').get(function(){
  return this._id;
})


const Walk = mongoose.model( "Walk", WalkSchema );

export default Walk;
