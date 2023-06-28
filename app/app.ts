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
