// desta forma faco uma funcao que return funcao, recebe parametros

export function TempExecution(secnds = false) {
  return function (
    target:unknown,
    propertyKey:string,
    descriptor: PropertyDescriptor
  )
  {
    const methodCurrent = descriptor.value;

    descriptor.value = function(...args:unknown[]) {
      const tempStart = performance.now();
      const returnMethod = methodCurrent.apply(this, args);
      //method
      const tempEnd = performance.now();
      console.log(`O Method 'E ${propertyKey}, Temp of ${ (tempEnd - tempStart)/1000} Secunds`);
      returnMethod;


      //console.log('return da funcao decorada',returnMethod);
    };
    //console.log('todo objeto funcao decorada',descriptor);
    //console.log('nome da funcao decorada',propertyKey);
    //console.log('funcao decorada',methodCurrent);



    return descriptor;
  };
}
