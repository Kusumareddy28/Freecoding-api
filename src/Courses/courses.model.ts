import * as mongoose from 'mongoose';

export const CoursesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  //course_image: { type: Blob, required: true },
});

export interface Courses extends mongoose.Document {
  id: string;
  title: string;
  description: string;
  date: string;
  time:string;
 // course_image:Blob;
}