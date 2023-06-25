import { Negotiationcontroller } from './controllers/negociacao-controller.js';
import { Negotiation } from './models/negociacao.js';

const negociacao = new Negotiation( new Date(), 10, 100);

console.log('step-1', negociacao);
console.log('data', negociacao.data);
console.log('quantidade', negociacao.quantidade);
console.log('valor', negociacao.valor);
console.log('volume', negociacao.volume);

const controler = new Negotiationcontroller();
const form = document.querySelector('.form');
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  controler.adiciona();
});
