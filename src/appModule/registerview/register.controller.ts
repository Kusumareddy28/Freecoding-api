
import {
    Controller,
    Post,
    Body,
    Get,
    Param,
   
  } from '@nestjs/common';

  
  import { RegisterService } from './register.service';
  
  @Controller('register')
  export class RegisterController {
    constructor(private readonly RegisterService: RegisterService) {}
  
    @Post()
    async addData(
      @Body('email') register_email: string,
      @Body('firstName') register_firstName: string,
      @Body('lastName') register_lastName: string,
      @Body('password') register_password: string,
    
    ) {
      const generatedId = await this.RegisterService.insertData(
        register_email,
        register_firstName,
        register_lastName,
        register_password,
     
      );
      return { id: generatedId };
    }
  
  
    @Get()
    getAllData() {
      return this.RegisterService.getData();
    }
  
    @Get(':id')
    getData(@Param('id') register_Id: string) {
      return this.RegisterService.getSingleData(register_Id);
    }
 
  }