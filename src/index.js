import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import './images/season-2-img.jpeg';
import './images/the100logo.png';
import commentEvent from './modules/commentEvent.js';
import Hundred from './modules/hundred.js';
import { likeEvent, renderLike } from './modules/likes.js';
import pageCount from './modules/pageCount.js';
import reservationEvent from './modules/reservationEvent.js';
import View from './modules/views.js';
import './style.css';

// Initialize
const url = 'https://api.tvmaze.com/shows/6/seasons';

const show = new Hundred(url);
show.getData(url);
const view = new View();

// On Page Load
window.onload = async () => {
  if (localStorage.getItem('data')) {
    const arr = JSON.parse(localStorage.getItem('data'));
    view.seasonList(arr);
    pageCount();
    commentEvent();
    reservationEvent();
    renderLike();
    likeEvent();
  }
};