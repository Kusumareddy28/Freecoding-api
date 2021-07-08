import * as mongoose from 'mongoose';

export const SchoolSchema = new mongoose.Schema({
  schoolName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  schoolAddress: { type: String, required: true },
  city:  { type: String, required: true },
  state:  { type: String, required: true },
  postalCode:  { type: Number, required: true },
  schoolWebsite:  { type: String, required: true },
  public_private_type:  { type: String, required: true },
  does_your_school_offer_cs_courses:  { type: String, required: true },
  courseNames: { type: String, required: true },
  computerLab: { type: String, required: true },
  accessToComputerOutsideTheClass: { type: String, required: true },
  accessToInternetOutsideTheClass: { type: String, required: true },
  coordinatorName : { type: String, required: true },
  designation: { type: String, required: true },
  coordinatorEmail: { type: String, required: true },
  coordinatorPhoneNumber: { type: Number, required: true },
  timingSupportedForFreecoding: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password : { type: String, required: true },
  policy: { type: String, required: true },

  
});

export interface School extends mongoose.Document {
  schoolName: string;
  email:string;
  phoneNumber:Number;
  schoolAddress: string;
  city: string;
  state:string;
  postalCode: Number;
  schoolWebsite: string;
  public_private_type: string;
  does_your_school_offer_cs_courses: string;
  courseNames: string;
  computerLab: string;
  accessToComputerOutsideTheClass:string;
  accessToInternetOutsideTheClass: string;
  coordinatorName : string;
  designation: string;
  coordinatorEmail: string;
  coordinatorPhoneNumber: Number;
  timingSupportedForFreecoding: string;
  firstName: string;
  lastName:string;
  password : string;
  policy: string;
}