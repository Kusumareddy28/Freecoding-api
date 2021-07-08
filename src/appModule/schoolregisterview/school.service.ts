import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { School } from './school.model';

@Injectable()
export class SchoolService {
  constructor(
    @InjectModel('School') private readonly schoolModel: Model<School>,
  ) {}

  async insertData(
  schoolName: string,
  email:string,
  phoneNumber:Number,
  schoolAddress: string,
  city: string,
  state:string,
  postalCode: Number,
  schoolWebsite: string,
  public_private_type: string,
  does_your_school_offer_cs_courses: string,
  courseNames: string,
  computerLab: string,
  accessToComputerOutsideTheClass:string,
  accessToInternetOutsideTheClass: string,
  coordinatorName : string,
  designation: string,
  coordinatorEmail: string,
  coordinatorPhoneNumber: Number,
  timingSupportedForFreecoding: string,
  firstName: string,
  lastName:string,
  password : string,
  policy: string,
  ) {
    const newSchool = new this.schoolModel({
      schoolName,
      email,
      phoneNumber,
      schoolAddress,
      city,
      state,
      postalCode,
      schoolWebsite,
      public_private_type,
      does_your_school_offer_cs_courses,
      courseNames,
      computerLab,
      accessToComputerOutsideTheClass,
      accessToInternetOutsideTheClass,
      coordinatorName,
      designation,
      coordinatorEmail,
      coordinatorPhoneNumber,
      timingSupportedForFreecoding,
      firstName,
      lastName,
      password,
      policy,
     
    });
    const result = await newSchool.save();
    return result.id as string;
  }

  async getData() {
    const school_data = await this.schoolModel.find().exec();
    return school_data.map(data => ({
      id: data.id,
      schoolName: data.schoolName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      schoolAddress: data.schoolAddress,
      city: data.city,
      state: data.state,
      postalCode: data.postalCode,
      schoolWebsite: data.schoolWebsite,
      public_private_type: data.public_private_type,
      does_your_school_offer_cs_courses: data.does_your_school_offer_cs_courses,
      courseNames: data.courseNames,
      computerLab: data.computerLab,
      accessToComputerOutsideTheClass: data.accessToComputerOutsideTheClass,
      accessToInternetOutsideTheClass: data.accessToInternetOutsideTheClass,
      coordinatorName: data.coordinatorName,
      designation: data.designation,
      coordinatorEmail: data.coordinatorEmail,
      coordinatorPhoneNumber: data.coordinatorPhoneNumber,
      timingSupportedForFreecoding: data.timingSupportedForFreecoding,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      policy: data.policy,
    
    }));
  }

  async getSingleData(schoolId: string) {
    const school_data = await this.findSchoolData(schoolId);
    return {
      id: school_data.id,
      schoolName: school_data.schoolName,
      email: school_data.email,
      phoneNumber: school_data.phoneNumber,
      schoolAddress: school_data.schoolAddress,
      city: school_data.city,
      state: school_data.state,
      postalCode: school_data.postalCode,
      schoolWebsite: school_data.schoolWebsite,
      public_private_type: school_data.public_private_type,
      does_your_school_offer_cs_courses: school_data.does_your_school_offer_cs_courses,
      courseNames: school_data.courseNames,
      computerLab: school_data.computerLab,
      accessToComputerOutsideTheClass: school_data.accessToComputerOutsideTheClass,
      accessToInternetOutsideTheClass: school_data.accessToInternetOutsideTheClass,
      coordinatorName: school_data.coordinatorName,
      designation: school_data.designation,
      coordinatorEmail: school_data.coordinatorEmail,
      coordinatorPhoneNumber: school_data.coordinatorPhoneNumber,
      timingSupportedForFreecoding: school_data.timingSupportedForFreecoding,
      firstName: school_data.firstName,
      lastName: school_data.lastName,
      password: school_data.password,
      policy: school_data.policy,
    };
  
}


  private async findSchoolData(id: string): Promise<School> {
    let school_data;
    try {
      school_data = await this.schoolModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find course.');
    }
    if (!school_data) {
      throw new NotFoundException('Could not find course.');
    }
    return school_data;
  }
  
}