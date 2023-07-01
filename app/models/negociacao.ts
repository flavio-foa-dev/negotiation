import { Printt } from '../utils/print.js';

export class Negotiation implements Printt {
  private _data: Date;
  private _quantidade : number;
  private _valor: number;

  constructor( data: Date, quantidade: number, valor: number ) {
    //super();
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  public printNegotiation(): string {
    return`
    DATA: ${this.data}
    QUANTIDADE; ${this.quantidade}
    Valor ${this.valor}
    `;
  }

  get data(): Date {
    const date = new Date(this._data.getTime());
    return date;
  }
  get quantidade(): number {
    return this._quantidade;
  }
  get valor(): number {
    return this._valor;
  }
  get volume(): number {
    return this._quantidade * this._valor;
  }
}
