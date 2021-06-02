
import {
    Controller,
    Post,
    Body,
    Get,
    Param,
   
  } from '@nestjs/common';

  
  import { TestimonialService } from './testimonial.service';
  
  @Controller('testimonial')
  export class TestimonialController {
    constructor(private readonly TestimonialService: TestimonialService) {}
  
    @Post()
    async addTestimonial(
      @Body('name') testi_name: string,
      @Body('designation') testi_designation: string,
      @Body('org_or_school') testi_org_or_school: string,
      @Body('review') testi_review: string,
    
    ) {
      const generatedId = await this.TestimonialService.insertTestimonial(
        testi_name,
        testi_designation,
        testi_org_or_school,
        testi_review,
     
      );
      return { id: generatedId };
    }
  
  
    @Get()
    getAllCourses() {
      return this.TestimonialService.getTestimonial();
    }
  
    @Get(':id')
    getTestimonial(@Param('id') testimonial_Id: string) {
      return this.TestimonialService.getSingleTestimonial(testimonial_Id);
    }
 
  }