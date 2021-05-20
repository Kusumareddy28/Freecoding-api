import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CoursesModule } from './Courses/courses.module';

@Module({
  imports: [CoursesModule, ProductsModule,  MongooseModule.forRoot('mongodb+srv://kusuma:Kusuma280598@cluster0.specc.mongodb.net/freecoding-db')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}