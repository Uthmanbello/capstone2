import {addReservation} from './add.js';
import { newReservation, storedReservations } from './api.js';
import { reservationCounter } from './counter.js';
import CommentPopup from './commentPopup.js';

const submitReservation = async (e) => {
  e.preventDefault();
  const resList = document.querySelector('.reservations-list');
  const reservationHeader = document.querySelector('.reserv-header');
  const username = e.target.username.value;
  const startDate = e.target.start_date.value;
  const endDate = e.target.end_date.value;
  const id = e.target.id1.value;

  await newReservation({ id, username, startDate, endDate });

  const data1 = await storedReservations(id);
  const dataArr1 = data1.data;
  let html1 = '';
  dataArr1.forEach((item) => {
    html1 += addReservation (item.username, item.date_start, item.date_end);
  });
  const resCount = reservationCounter(dataArr1);
  resList.innerHTML = html1;
  reservationHeader.innerHTML = `Reservations(${resCount})`;
  e.target.reset();
  reservationCounter(dataArr1);
};

const reservationEvent = () => {
  const popup = document.querySelector('.comment-popup');
  const reservationButtons = document.querySelectorAll('.res-btn');

  for (let index = 0; index < reservationButtons.length; index++) {
    reservationButtons[index].addEventListener('click', async () => {
      const data = JSON.parse(localStorage.getItem('data'));
      const btnId = reservationButtons[index].id;
      const element = data?.find((item) => Number(item.id) === Number(btnId));
      popup.classList.remove('d-none');
      const popUpContents = new CommentPopup();
      await popUpContents.seasonList(element);

      const commentItem = document.querySelector('.comment-items');
      commentItem.classList.add('d-none');

      const forms1 = document.querySelector('.reservation-form');

      forms1.addEventListener('submit', submitReservation);

      const popupCloseButton = popup.querySelector('.popup-close');
      popupCloseButton.addEventListener('click', () => {
        const popUpContents = document.querySelector('.popup-content');
        popup.classList.add('d-none');
        popUpContents.remove();
      });
    });
  }
};

export default reservationEvent;