
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const itemframeSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String
})

const itemframeModel = mongoose.model('itemframe', itemframeSchema, 'itemframe');
export default itemframeModel;
