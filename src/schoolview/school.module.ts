import { Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';
import { SchoolSchema } from './school.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'School', schema: SchoolSchema }]),
   
  ],
  controllers: [SchoolController],
  providers: [SchoolService],
})
export class SchoolModule {}