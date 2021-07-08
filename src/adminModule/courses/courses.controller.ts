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
  
    @Post()
    async addCourses(
      @Body('title') courseTitle: string,
      @Body('description') courseDesc: string,
      @Body('date') courseDate: string,
      @Body('time') courseTime: string,
     
    ) {
      const generatedId = await this.CoursesService.insertCourses(
        courseTitle,
        courseDesc,
        courseDate,
        courseTime,
      
      );
      return { id: generatedId };
    }
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
      console.log(file);
    }
  
    @Get(':upload')
    setUploadedFile(@Param('upload') image,
    @Res() res){
      const imgPath =UploadedFile(image);
      return res.sendFile(imgPath, {root:'uploads'});
    }
    
   
 
  }