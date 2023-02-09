// eslint-disable-next-line import/no-unresolved
import '@fortawesome/fontawesome-free/js/fontawesome.js';
// eslint-disable-next-line import/no-unresolved
import '@fortawesome/fontawesome-free/js/regular.js';
import './images/season-2-img.jpeg';
import './images/the100logo.png';
import commentEvent from './modules/commentEvent.js';
import CommentPopup from './modules/commentPopup.js';
import Hundred from './modules/hundred.js';
import resEvent from './modules/reservationEvent.js';
import View from './modules/views.js';
import './style.css';

// Initialize
const url = 'https://api.tvmaze.com/shows/6/seasons';
const involvementBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const addLikesURL = `${involvementBaseURL}apps/Ah7jYcR1vh7ExHgt7yOD`;

const show = new Hundred(url);
show.getData(url);
const view = new View();
const commentPop = new CommentPopup();

// On Page Load
window.onload = () => {
  if (localStorage.getItem('data')) {
    const arr = JSON.parse(localStorage.getItem('data'));
    view.seasonList(arr);
    commentPop.seasonList(arr);
    commentEvent();
    resEvent();
  }
};