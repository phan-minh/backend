import { model, Schema, Document, Types } from "mongoose";

const userSchema: Schema = new Schema({ 
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    trim: true,
    lowercase: true,
  },
  age: {
    type: Number,
  },
  job: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
  },
});

const userModel = model<Document>("userSchema", userSchema);
export default userModel;
