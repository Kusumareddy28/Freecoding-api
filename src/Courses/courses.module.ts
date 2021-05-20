import { Module} from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { MongooseModule } from '@nestjs/mongoose';

import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { CoursesSchema } from './courses.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Courses', schema: CoursesSchema }]),
    MulterModule.register({
      dest:'./uploads',
    })
  ],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}