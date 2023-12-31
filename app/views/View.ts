import { InspectoFunction } from '../decorations/inspect.js';
import { TempExecution } from '../decorations/tempExecution.js';

export abstract class View<T> {

  protected element: HTMLElement;

  constructor(selector: string) {
    const element: HTMLElement | null = document.querySelector(selector);
    if (element) {
      this.element = element;
    } else {
      throw new Error('Cannot find element with selector');
    }
  }

  protected abstract template(model: T, propsClass?:string): string

  @TempExecution()
  @InspectoFunction
  update(model: T, propsClass?:string): void {

    const template = this.template(model, propsClass);
    this.element.innerHTML = template;

  }

  // @InspectoFunction()
  // @TempExecution()
  // public Wook() {
  //   console.log('Wook');
  //   return 'oioi';
  // }
}
