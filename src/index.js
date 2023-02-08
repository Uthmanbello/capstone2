import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/regular';
import './images/season-2-img.jpeg';
import './images/the100logo.png';
import Hundred from './modules/hundred.js';
import View from './modules/views.js';
import './style.css';

const url = 'https://api.tvmaze.com/shows/6/seasons';
const show = new Hundred(url);
show.getData(url);
const view = new View();

// On Page Load
window.onload = () => {
  if (localStorage.getItem('data')) {
    const arr = JSON.parse(localStorage.getItem('data'));
    view.seasonList(arr);
  }
};