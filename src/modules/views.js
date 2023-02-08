class View {
  seasonList = (arr) => {
    const viewBox = document.querySelector('#view-box');
    arr.forEach((element) => {
      const div = document.createElement('div');
      div.innerHTML = `
      <div class="season-card">
      <img src="${element.image.medium}" alt="season image" class="card-image">
      <div class="season-description">
        <h4 class="season-title">Season ${element.number}</h4>
        <p class="likes">
          <span class="likes-counter">5</span> likes <i class="fa-regular fa-heart"></i>
        </p>
      </div>
      <a href="" class="comments btn-primary">Comment</a>
      <a href="" class="reservation btn-primary">Reservation</a>
    </div>
    `;
      viewBox.append(div);
    });
  }
}

export default View;