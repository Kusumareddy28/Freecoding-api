import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddCoursesModule } from './adminModule/courses/courses.module';
import { CoursesModule } from './appModule/courses/courses.module';
import { TestimonialModule } from './appModule//testimonial/testimonial.module';
import { RegisterModule } from './appModule/registerview/register.module';
import { SchoolModule } from './appModule/schoolregisterview/school.module';


@Module({
  imports: [TestimonialModule, AddCoursesModule,CoursesModule, RegisterModule, SchoolModule, MongooseModule.forRoot('mongodb+srv://kusuma:Kusuma280598@cluster0.specc.mongodb.net/freecoding-db',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
  }),

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}