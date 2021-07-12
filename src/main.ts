import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


const express = require('express');
const http = require('http');
async function bootstrap() {
  // const server = express();
  const port = (process.env.PORT || '3003');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api/v1");
  await app.listen(port);  
  


  const options = new DocumentBuilder()
  .setTitle('API Documentation')
  .setDescription('Swagger Documentation for the API')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/v1',app,document);
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
