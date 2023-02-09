const resEvent = () => {
  const popup = document.querySelector('.comment-popup');
  const popupContents = document.querySelectorAll('.popup-content');
  const resButtons = document.querySelectorAll('.res-btn');
  const commentItems = document.querySelectorAll('.comment-items');

  for (let index = 0; index < resButtons.length; index++) {
    resButtons[index].addEventListener('click', () => {
      popup.classList.remove('d-none');
      popupContents[index].classList.remove('d-none');
      commentItems[index].classList.add('d-none');

      const popupCloseButtons = popup.querySelectorAll('.popup-close');
      popupCloseButtons[index].addEventListener('click', () => {
        popup.classList.add('d-none');
        popupContents[index].classList.add('d-none');
      });
    });
  }
};

export default resEvent;
