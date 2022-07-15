import { Injectable } from '@nestjs/common';

@Injectable() //el @ es un decorador que permite que la clase se comporte como un modulo;
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
