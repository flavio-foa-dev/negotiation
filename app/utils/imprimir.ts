import { Printt } from './print.js';

export function imprimir(...objs: Printt[]) {
  for (const value of objs) {
    console.log('###',value.printNegotiation());
  }
}