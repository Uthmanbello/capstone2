const pageCount = () => {
  const seasons = document.querySelector('.seasons-count');
  const cards = document.querySelectorAll('.season-card').length;
  seasons.innerHTML = `${cards} seasons`;
};

export default pageCount;