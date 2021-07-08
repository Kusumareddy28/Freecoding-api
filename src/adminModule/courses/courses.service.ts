import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Courses } from './courses.model';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel('Courses') private readonly coursesModel: Model<Courses>,
  ) {}

  async insertCourses(title: string, desc: string, date: string, time: string, /*course_image:Blob*/) {
    const newCourses = new this.coursesModel({
      title,
      description: desc,
      date,
      time,
     // course_image,
    });
    const result = await newCourses.save();
    return result.id as string;
  }

  
}