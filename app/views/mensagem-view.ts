import { View } from './View.js';

export class MensageView extends View<string> {

  protected template(model: string, propsClass: string) {
    return`
      <p class="alert alert-${propsClass}">${model}</p>
    `;
  }
}
