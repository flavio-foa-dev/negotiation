import { Negotiation } from '../models/negociacao';
import { Negotiations } from '../models/negociacoes.js';
import { View } from './View.js';

export class NegotiationsView extends View<Negotiations> {

  template(model: Negotiations): string {
    return `
      <table class="table  table-hover table-bordered">
        <thead>
          <tr>
            <th>Data</th>
            <th>Quantidade</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody class="table">
          ${model.list().map((negotiation: Negotiation) => {
    return`
      <tr>
        <td>${new Intl.DateTimeFormat().format(negotiation.data)}</td>
        <td>${negotiation.quantidade}</td>
        <td>${negotiation.valor}</td>
      </tr>`;

  })}
        </tbody>
      </table>
    `;
  }
}
