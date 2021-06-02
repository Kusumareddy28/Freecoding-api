import * as mongoose from 'mongoose';

export const RegisterSchema = new mongoose.Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  
});

export interface Register extends mongoose.Document {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password:string;
}