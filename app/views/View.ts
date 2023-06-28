export abstract class View<T> {

  protected element: HTMLElement;

  constructor(selector: string){
    this.element = document.querySelector(selector);
  }

  protected abstract template(model: T, propsClass?:string): string

  update(model: T, propsClass?:string): void {
    const template = this.template(model, propsClass);
    this.element.innerHTML = template;
  }
}
