import { GetElementOfDoom } from '../decorations/getElementOfDoom.js';
import { TempExecution } from '../decorations/tempExecution.js';
import { DayWeek } from '../enums/day-week.js';
import { Negotiation } from '../models/negociacao.js';
import { Negotiations } from '../models/negociacoes.js';
import { MensageView } from '../views/mensagem-view.js';
import { NegotiationsView } from '../views/negociacoesViews.js';

export class Negotiationcontroller {
  @GetElementOfDoom('#data')
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  private negociations: Negotiations = new Negotiations();
  private negotiationView = new NegotiationsView('#negotiation-view');
  private messageView = new MensageView('#mensagem-view');

  constructor() {
    //this.inputData = <HTMLInputElement> document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
    this.inputValor = document.querySelector('#valor') as HTMLInputElement;

    this.negotiationView.update(this.negociations);

  }
  @TempExecution()
  public adiciona(): void {
    const negotiation =  this.createNegotiation();

    if (!this.businessDay(negotiation.data)) {
      this.messageView.update('Apenas dias uteis', 'danger');
      return;
    }
    this.negociations.adiciona(negotiation);
    //this.negociations.list().pop();
    this.updateAllViews();
    console.log('Lista de negociacoes C',this.negociations.list());
    this.cleanForm();
  }

  importdata(): void {
    fetch('http://localhost:8080/dados')
      .then((res) => res.json())
      .then((data: any[]) => {
        return data.map((item)=> {
          return new Negotiation(new Date, item.vezes, item.montante);
        });
      }).then(neg => {
        for (const value of neg) {
          this.negociations.adiciona(value);
        }
        this.updateAllViews();
      });
  }

  private businessDay(date: Date): boolean {
    return date.getDay() < DayWeek.SATURDAY
      && date.getDay() > DayWeek.MONDAY;
  }

  private createNegotiation(): Negotiation {
    const regex = /-/g;
    const date = new Date(this.inputData.value.replace(regex, ','));
    const quantidade = parseInt( this.inputQuantidade.value, 10);
    const preco = parseFloat( this.inputValor.value);
    return new Negotiation(date, quantidade, preco);
  }

  private cleanForm(): void {
    this.inputData.value = '';
    this.inputValor.value = '';
    this.inputQuantidade.value = '';
    this.inputData.focus();
  }

  private updateAllViews(): void {
    this.negotiationView.update(this.negociations, 'success');
    this.messageView.update('Negotiation added with success. DONE', 'success');
  }
}
