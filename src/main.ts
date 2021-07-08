import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



const express = require('express');
const http = require('http');
async function bootstrap() {
  // const server = express();
  const port = (process.env.PORT || '3003');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api/v1");
  await app.listen(port);  
  
  // const apiFactory = new NestFactoryStatic();
  // const api = await apiFactory.create(AppModule, server); 
  // const adminFactory = new NestFactoryStatic();
  // const admin = await adminFactory.create(AdminModule, server);
  // admin.setGlobalPrefix("/api/v1/admin");
  // await admin.init();
  // const port = (process.env.PORT || '3003');
  // console.log("App is running on port " + port)
  // http.createServer(server).listen(port);
}
bootstrap();
