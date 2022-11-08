import {sum} from './modules/sum';
// import './scss/main.scss'

const root = document.querySelector('#root');
root.textContent = sum(6, 434).toString();
