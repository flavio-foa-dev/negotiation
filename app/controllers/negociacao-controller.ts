import { Negotiation } from '../models/negociacao.js';

export class Negotiationcontroller {
  private inputData;
  private inputQuantidade;
  private inputValor;

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
  }

  adiciona() {
    const negotiation = new Negotiation(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    console.log(negotiation, 'nova negociacao criada');
  }
}
