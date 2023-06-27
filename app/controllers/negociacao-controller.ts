import { Negotiation } from '../models/negociacao.js';
import { Negotiations } from '../models/negociacoes.js';
import { MensageView } from '../views/mensagem-view.js';
import { NegotiationsView } from '../views/negociacoesViews.js';

export class Negotiationcontroller {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  private negociations: Negotiations = new Negotiations();
  private negotiationView = new NegotiationsView('#negotiation-view');
  private messageView = new MensageView('#mensagem-view');

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');

    this.negotiationView.update(this.negociations);

  }

  adiciona(): void {
    const negotiation =  this.createNegotiation();
    this.negociations.adiciona(negotiation);
    //this.negociations.list().pop();

    console.log('Lista de negociacoes C',this.negociations.list());
    this.cleanForm();

    this.negotiationView.update(this.negociations);
    this.messageView.update('Negotiation added with success. DONE');

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
