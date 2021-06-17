import './sass/main.scss';

import menuCardsTpl from './templates/menu-card-markup.hbs';
import items from './menu.json';

const refs = {
    menuContRef: document.querySelector('.js-menu'),
    toggleRef: document.querySelector('#theme-switch-toggle'),
    bodyBackgroundRef: document.querySelector('body'), 
}


refs.menuContRef.insertAdjacentHTML('beforeend', menuCardsTpl(items));


// Theme

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


refs.toggleRef.addEventListener('change', changeThem);

function changeThem() {
    if (refs.toggleRef.checked) {
        refs.bodyBackgroundRef.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        refs.bodyBackgroundRef.classList.remove(Theme.DARK);
        refs.bodyBackgroundRef.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

function checkingSavedTheme() {
    if (!localStorage.getItem('theme') || localStorage.getItem('theme') === Theme.LIGHT) {
        refs.bodyBackgroundRef.classList.add(Theme.LIGHT);
    } else {
        refs.toggleRef.checked = true;
        refs.bodyBackgroundRef.classList.remove(Theme.LIGHT);
        refs.bodyBackgroundRef.classList.add(Theme.DARK);
    }
}
checkingSavedTheme()