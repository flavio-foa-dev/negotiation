export function GetElementOfDoom(selector: string) {
  return function(target: unknown, propertyKey: string) {

    let element:HTMLElement | null = null;
    const getter = function() {
      if (!element) {
        element = <HTMLElement>document.querySelector(selector);
        console.log(`@busncando elemto do dom com o seletor ${selector + propertyKey}@`);
      }
      return element;
    };
    console.log('@busncando');
    Object.defineProperty(target, propertyKey, { get: getter });
  };
}