// desta forma return funcao direto, nao recebe parametros
export function InspectoFunction(target: unknown, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const methodCurrent = descriptor.value;

  descriptor.value = function(...args: unknown[]) {
    const resultReturn = methodCurrent.apply(this, args);
    console.log(`---Metodo ${propertyKey}`);
    console.log(`------Parametros ${JSON.stringify(args, undefined, 2)}`);
    console.log(`Retorno da funcao ${resultReturn}`);

    return resultReturn;
  };


  return descriptor;
}

