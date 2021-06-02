
import {
    Controller,
    Post,
    Body,
    Get,
    Param,
   
  } from '@nestjs/common';

  
  import { SchoolService } from './school.service';
  
  @Controller('school')
  export class SchoolController {
    constructor(private readonly SchoolService: SchoolService) {}
  
    @Post()
    async addData(
      @Body('schoolName') schoolName: string,
      @Body('email') email: string,
      @Body('phoneNumber') phoneNumber: Number,
      @Body('schoolAddress') schoolAddress: string,
      @Body('city') city: string,
      @Body('state') state: string,
      @Body('postalCode') postalCode: Number,
      @Body('schoolWebsite') schoolWebsite: string,
      @Body('public_private_type') public_private_type: string,
      @Body('does_your_school_offer_cs_courses') does_your_school_offer_cs_courses: string,
      @Body('courseNames') courseNames: string,
      @Body('computerLab') computerLab: string,
      @Body('accessToComputerOutsideTheClass') accessToComputerOutsideTheClass: string,
      @Body('accessToInternetOutsideTheClass') accessToInternetOutsideTheClass: string,
      @Body('coordinatorName') coordinatorName: string,
      @Body('designation') designation: string,
      @Body('coordinatorEmail') coordinatorEmail: string,
      @Body('coordinatorPhoneNumber') coordinatorPhoneNumber: Number,
      @Body('timingSupportedForFreecoding') timingSupportedForFreecoding: string,
      @Body('firstName') firstName: string,
      @Body('lastName') lastName: string,
      @Body('password') password: string,
      @Body('policy') policy: string,
      
    ) {
      const generatedId = await this.SchoolService.insertData(
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
     
      );
      return { id: generatedId };
    }
  
  
    @Get()
    getAllData() {
      return this.SchoolService.getData();
    }
  
    @Get(':id')
    getData(@Param('id') school_Id: string) {
      return this.SchoolService.getSingleData(school_Id);
    }
 
  }