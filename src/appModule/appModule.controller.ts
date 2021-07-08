import { NestFactory } from '@nestjs/core';
import { NestFactoryStatic } from '@nestjs/core/nest-factory';
const express = require('express');
const http = require('http');
async function appModule() {
   const server = express();
  //const port = (process.env.PORT || '3001');
  //const app = await NestFactory.create(AppModule);
  //app.setGlobalPrefix("/api/v1");
  //await app.listen(port);  
  
   //const apiFactory = new NestFactoryStatic();
   //const api = await apiFactory.create(appModule, '3000'); 
   const appFactory = new NestFactoryStatic();
   const app = await appFactory.create(appModule, server);
   app.setGlobalPrefix("/api/v1/app");
   await app.init();
   const port = (process.env.PORT || '3001');
   console.log("App is running on port " + port)
   http.createServer(server).listen(port);
}
appModule();
