import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './adminModule/courses/courses.module';
import { TestimonialModule } from './adminModule//testimonial/testimonial.module';
import { RegisterModule } from './appModule/registerview/register.module';
import { SchoolModule } from './appModule/schoolregisterview/school.module';

@Module({
  imports: [TestimonialModule, CoursesModule, RegisterModule, SchoolModule, MongooseModule.forRoot('mongodb+srv://kusuma:Kusuma280598@cluster0.specc.mongodb.net/freecoding-db')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}