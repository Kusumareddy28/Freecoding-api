import { Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TestimonialController } from './testimonial.controller';
import { TestimonialService } from './testimonial.service';
import { TestimonialSchema } from './testimonial.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Testimonial', schema: TestimonialSchema }]),
   
  ],
  controllers: [TestimonialController],
  providers: [TestimonialService],
})
export class TestimonialModule {}