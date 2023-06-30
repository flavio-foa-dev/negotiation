import { Scape } from '../decorations/scape.js';
import { Negotiation } from '../models/negociacao.js';
import { Negotiations } from '../models/negociacoes.js';
import { View } from './View.js';

export class NegotiationsView extends View<Negotiations> {

  @Scape()
  protected template(model: Negotiations): string {
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
        <td>${this.formatDate(negotiation.data)}</td>
        <td>${negotiation.quantidade}</td>
        <td>${negotiation.valor}</td>
      </tr>`;

  })}
        </tbody>
      </table>
    `;
  }

  private formatDate(date: Date): string {
    return new Intl.DateTimeFormat()
      .format(date);
  }
}
