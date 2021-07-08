import { NestFactory } from '@nestjs/core';
import { NestFactoryStatic } from '@nestjs/core/nest-factory';
const express = require('express');
const http = require('http');
async function adminModule() {
   const server = express();
  //const port = (process.env.PORT || '3001');
  //const app = await NestFactory.create(AppModule);
  //app.setGlobalPrefix("/api/v1");
  //await app.listen(port);  
  
   //const apiFactory = new NestFactoryStatic();
   //const api = await apiFactory.create(appModule, '3000'); 
   const adminFactory = new NestFactoryStatic();
   const admin = await adminFactory.create(adminModule, server);
   admin.setGlobalPrefix("/api/v1/admin");
   await admin.init();
   const port = (process.env.PORT || '3000');
   console.log("App is running on port " + port)
   http.createServer(server).listen(port);
}
adminModule();
