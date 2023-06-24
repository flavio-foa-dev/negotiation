export class Negationcontroller {
  private inputData;
  private inputQuantidade;
  private inputValor;

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
  }

  adiciona() {
    console.log('adiciona', this.inputData.value);
    console.log('adiciona', this.inputQuantidade.value);
    console.log('adiciona', this.inputValor.value);
  }
}
