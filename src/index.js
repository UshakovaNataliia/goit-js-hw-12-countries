// import './styles.css';
// import './templates/templateCountry.hbs';


import './scss/styles.scss';
import '@pnotify/core/dist/BrightTheme.css';
import lodash from 'lodash';
import fetchCountries from './js/fetchCountries';

const input = document.querySelector('.js-input');
input.addEventListener(
  'input',
  lodash.debounce(() => {
    fetchCountries(input.value);
  }, 500),
);