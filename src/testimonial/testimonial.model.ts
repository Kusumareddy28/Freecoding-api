import * as mongoose from 'mongoose';

export const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  org_or_school: { type: String, required: true },
  review: { type: String, required: true },
  
});

export interface Testimonial extends mongoose.Document {
  id: string;
  name: string;
  designation: string;
  org_or_school: string;
  review:string;
}