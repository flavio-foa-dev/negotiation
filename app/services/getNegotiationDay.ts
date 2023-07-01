import { Negotiation } from '../models/negociacao.js';
import { INegotiationDay } from '../types/negotiationDay.js';

export class NegotiationDayService {

  private readonly api = 'http://localhost:8080/dadoss';

  public getNegotiation(): Promise<Negotiation[]> {
    return fetch(this.api)
      .then((res) => res.json())
      .then((data: INegotiationDay[]) => {
        return data.map((item)=> {
          return new Negotiation(new Date, item.vezes, item.montante);
        });
      });
  }
}