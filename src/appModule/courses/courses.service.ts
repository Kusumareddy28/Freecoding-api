import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Courses } from './courses.model';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel('Courses') private readonly coursesModel: Model<Courses>,
  ) {}

 
  async getCourses() {
    const courses = await this.coursesModel.find().exec();
    return courses.map(course => ({
      id: course.id,
      title: course.title,
      description: course.description,
      date: course.date,
      time: course.time,
     // course_image: course.course_image,
    }));
  }

  async getSingleCourses(coursesId: string) {
    const courses = await this.findCourse(coursesId);
    return {
      id: courses.id,
      title: courses.title,
      description: courses.description,
      date: courses.date,
      time:courses.time,
      //course_image: courses.course_image,
    };
  
}


  private async findCourse(id: string): Promise<Courses> {
    let course;
    try {
      course = await this.coursesModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find course.');
    }
    if (!course) {
      throw new NotFoundException('Could not find course.');
    }
    return course;
  }
  
}