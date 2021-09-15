
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const itemtaglistSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   category: [{ type: Schema.Types.ObjectId, ref: 'itemtag' }],
   farme: [{ type: Schema.Types.ObjectId, ref: 'itemframe' }],
   motor: [{ type: Schema.Types.ObjectId, ref: 'itemmotor' }]
})

const itemtaglistModel = mongoose.model('itemtaglist', itemtaglistSchema, 'itemtaglist');
export default itemtaglistModel;
