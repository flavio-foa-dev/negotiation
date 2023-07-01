import { Printt } from '../utils/print.js';
import { Negotiation } from './negociacao.js';

export class Negotiations implements Printt {

  private negotiations: Negotiation[] = [];
  //private negotiationss: Array<Negotiation> = [];

  public adiciona(negotiation: Negotiation ): void {
    this.negotiations.push(negotiation);

    console.log(`Negotiations M: ${this.negotiations.length}`);
  }

  public list(): ReadonlyArray<Negotiation> {
    return this.negotiations;
  }

  public printNegotiation(): string {
    return JSON.stringify(this.negotiations, undefined, 2);
  }

}