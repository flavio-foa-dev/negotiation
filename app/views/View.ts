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

  update(model: T, propsClass?:string): void {
    const tempStart = performance.now();
    const template = this.template(model, propsClass);
    this.element.innerHTML = template;
    const tempEnd = performance.now();

    console.log(`Tempod de execucao update ${(tempEnd - tempStart)/100} secundos`);


  }
}
