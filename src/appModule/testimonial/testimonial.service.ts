import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Testimonial } from './testimonial.model';

@Injectable()
export class TestimonialService {
  constructor(
    @InjectModel('Testimonial') private readonly testimonialModel: Model<Testimonial>,
  ) {}

  async insertTestimonial(name: string, designation: string, org_or_school: string, review: string) {
    const newTestimonial = new this.testimonialModel({
      name,
      designation,
      org_or_school,
      review,
     
    });
    const result = await newTestimonial.save();
    return result.id as string;
  }

  async getTestimonial() {
    const testimonials = await this.testimonialModel.find().exec();
    return testimonials.map(testimonial => ({
      id: testimonial.id,
      name: testimonial.name,
      designation: testimonial.designation,
      org_or_school: testimonial.org_or_school,
      review: testimonial.review,
    
    }));
  }

  async getSingleTestimonial(testimonialId: string) {
    const testimonial = await this.findTestimonial(testimonialId);
    return {
      id: testimonial.id,
      name: testimonial.name,
      designation: testimonial.designation,
      org_or_school: testimonial.org_or_school,
      review: testimonial.review,
    };
  
}


  private async findTestimonial(id: string): Promise<Testimonial> {
    let course;
    try {
      course = await this.testimonialModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find course.');
    }
    if (!course) {
      throw new NotFoundException('Could not find course.');
    }
    return course;
  }
  
}