import { Negotiation } from './negociacao';

export class Negotiations {
  private negotiations: Negotiation[] = [];
  //private negotiationss: Array<Negotiation> = [];

  adiciona(negotiation: Negotiation ): void {
    this.negotiations.push(negotiation);

    console.log(`Negotiations M: ${this.negotiations.length}`);
  }

  list(): ReadonlyArray<Negotiation> {
    return this.negotiations;
  }

}