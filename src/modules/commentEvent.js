import addComment from './add.js';
import { newComment, storedComments } from './api.js';
import commentCounter from './commentCounter.js'

const commentEvent = () => {
  const popup = document.querySelector('.comment-popup');
  const popupContents = document.querySelectorAll('.popup-content');
  const commentButtons = document.querySelectorAll('.comment-btn');
  const reservationItems = document.querySelectorAll('.reservation-items');
  const forms = document.querySelectorAll('.comment-form');

  for (let index = 0; index < commentButtons.length; index++) {
    commentButtons[index].addEventListener('click', () => {
      popup.classList.remove('d-none');
      popupContents[index].classList.remove('d-none');
      reservationItems[index].classList.add('d-none');

      const popupCloseButtons = popup.querySelectorAll('.popup-close');
      popupCloseButtons[index].addEventListener('click', () => {
        popup.classList.add('d-none');
        popupContents[index].classList.add('d-none');
      });
    });

    const submitComment = async (e) => {
        e.preventDefault();
        const names = document.querySelectorAll('.comment-name');
        const comms = document.querySelectorAll('.text-input');
        const name = names[index].value;
        const comm = comms[index].value;
        const id = e.target.id.value;
        const ind = [index];
        const { status } = await newComment({ id, name, comm });
        const data = await storedComments(id);
        const dataArr = data.data;
        dataArr.forEach(item => {
            addComment(ind, item.creation_date, item.username, item.comment)
        }) 
        e.target.reset();
        commentCounter(ind, dataArr);
      };
      
      forms[index].addEventListener('submit', submitComment);
  }
};

export default commentEvent;