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
          <span class="likes-counter">5</span> likes <i class="fa-regular fa-heart like-button"></i>
        </p>
      </div>
      <button type="button" id="${element.id}" class="comments btn-primary comment-btn">Comment</button>
      <button type="button" id="${element.id}" class="reservation btn-primary res-btn">Reservation</button>
    </div>
    `;
      viewBox.append(div);
    });
  }
}

export default View;