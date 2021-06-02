import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './Courses/courses.module';
import { TestimonialModule } from './testimonial/testimonial.module';
import { RegisterModule } from './registerview/register.module';
import { SchoolModule } from './schoolview/school.module';

@Module({
  imports: [TestimonialModule, CoursesModule, RegisterModule, SchoolModule, MongooseModule.forRoot('mongodb+srv://kusuma:Kusuma280598@cluster0.specc.mongodb.net/freecoding-db')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}