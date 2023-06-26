import { Negotiation } from '../models/negociacao.js';

export class Negotiationcontroller {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
  }

  adiciona(): void {
    const negotiation =  this.createNegotiation();
    console.log(negotiation, 'nova negociacao criada');
    this.cleanForm();
  }

  createNegotiation(): Negotiation {
    const regex = /-/g;
    const date = new Date(this.inputData.value.replace(regex, ','));
    const quantidade = parseInt( this.inputQuantidade.value, 10);
    const preco = parseFloat( this.inputValor.value);
    return new Negotiation(date, quantidade, preco);
  }

  cleanForm():void {
    this.inputData.value = '';
    this.inputValor.value = '';
    this.inputQuantidade.value = '';
    this.inputData.focus();
  }

}
