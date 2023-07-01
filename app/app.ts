import { Negotiationcontroller } from './controllers/negociacao-controller.js';

const controler = new Negotiationcontroller();
const form = document.querySelector('.form');

if (form) {
  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    controler.adiciona();
  });

} else {
  throw new Error('Form not found');
}


const btnImport = document.querySelector('#botao-importa');
if( btnImport) {
  btnImport.addEventListener('click', ()=> {
    controler.importdata();
  });


}else {
  throw new Error('select not found do event import');
}