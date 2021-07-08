import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Register } from './register.model';

@Injectable()
export class RegisterService {
  constructor(
    @InjectModel('Register') private readonly registerModel: Model<Register>,
  ) {}

  async insertData(email: string, firstName: string, lastName: string, password: string) {
    const newRegister = new this.registerModel({
      email,
      firstName,
      lastName,
      password,
     
    });
    const result = await newRegister.save();
    return result.id as string;
  }

  async getData() {
    const register_data = await this.registerModel.find().exec();
    return register_data.map(data => ({
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    
    }));
  }

  async getSingleData(registerId: string) {
    const register_data = await this.findRegisterData(registerId);
    return {
      id: register_data.id,
      email: register_data.email,
      firstName: register_data.firstName,
      lastName: register_data.lastName,
      password: register_data.password,
    };
  
}


  private async findRegisterData(id: string): Promise<Register> {
    let register_data;
    try {
      register_data = await this.registerModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find course.');
    }
    if (!register_data) {
      throw new NotFoundException('Could not find course.');
    }
    return register_data;
  }
  
}