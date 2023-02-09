const commentEvent = () => {
  const popup = document.querySelector('.comment-popup');
  const popupContents = document.querySelectorAll('.popup-content');
  const commentButtons = document.querySelectorAll('.comment-btn');

  for (let index = 0; index < commentButtons.length; index++) {
    commentButtons[index].addEventListener('click', () => {
      popup.classList.remove('d-none');
      popupContents[index].classList.remove('d-none');

      const btnClosePopup = popup.querySelector('.popup-close');
      btnClosePopup.addEventListener('click', () => {
        popup.classList.add('d-none');
      });
    });
  }
};

export default commentEvent;
