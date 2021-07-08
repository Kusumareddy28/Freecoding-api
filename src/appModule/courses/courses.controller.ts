import { Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import {
    Controller,
    Post,
    Body,
    Get,
    Param,
   
  } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
  
  import { CoursesService } from './courses.service';
  
  @Controller('courses')
  export class CoursesController {
    constructor(private readonly CoursesService: CoursesService) {}
    @Get()
    getAllCourses() {
      return this.CoursesService.getCourses();
    }
  
    @Get(':id')
    getCourses(@Param('id') courseId: string) {
      return this.CoursesService.getSingleCourses(courseId);
    }
 
  }