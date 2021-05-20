import { UploadedFile, UseInterceptors } from '@nestjs/common';
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
  
    @Post()
    async addCourses(
      @Body('title') courseTitle: string,
      @Body('description') courseDesc: string,
      @Body('date') courseDate: string,
      @Body('time') courseTime: string,
     // @Body('course_image') courseCourse_image: Blob,
    ) {
      const generatedId = await this.CoursesService.insertCourses(
        courseTitle,
        courseDesc,
        courseDate,
        courseTime,
      //  courseCourse_image,
      );
      return { id: generatedId };
    }
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
      console.log(file);
    }
  
    @Get()
    getAllCourses() {
      return this.CoursesService.getCourses();
    }
  
    @Get(':id')
    getCourses(@Param('id') courseId: string) {
      return this.CoursesService.getSingleCourses(courseId);
    }
 
  }