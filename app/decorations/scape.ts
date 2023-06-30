export function Scape() {
  return function(target: unknown, propertykey: string, descriptor: PropertyDescriptor) {

    const methodCurrent = descriptor.value;
    descriptor.value = function(...args: unknown[]) {
      let resultReturn = methodCurrent.apply(this, args);
      if(typeof resultReturn === 'string') {
        console.log(`@Scape na classe ${this.constructor.name}`);
        resultReturn = resultReturn.replace(/<script>[\s\S]*?<\/script>/g, '');
      }
      return resultReturn;
    };
    return descriptor;
  };
}