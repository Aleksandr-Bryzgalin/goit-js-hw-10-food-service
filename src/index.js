import './sass/main.scss';

import menuCardsTpl from './templates/menu-card-markup.hbs';
import items from './menu.json';


const menuCont = document.querySelector('.js-menu');
const menuMarkup = createMenuCards(items);

menuCont.insertAdjacentHTML('beforeend', menuMarkup);


function createMenuCards(items) {
    return menuCardsTpl(items)
}