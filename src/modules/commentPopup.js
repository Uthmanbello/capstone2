class CommentPopup {
    seasonList = (arr) => {
      const commentPopup = document.querySelector('.comment-popup');
      arr.forEach((element) => {
        const div = document.createElement('div');
        div.classList.add('popup-content', 'd-none');
        div.innerHTML = `
            <div class="popup-header">
                <img src="${element.image.original}" alt="season ${element.number}" class="popup-image">
                <i class="fa-regular fa-circle-xmark popup-close"></i>
            </div>
            <h2 class="popup-title center">Season ${element.number}</h2>
            <div class="synopsis">
                <p>Premier Date: ${element.premiereDate}</p>
                <p class="second-element end">End Date: ${element.endDate}</p>
            </div>
            <div class="synopsis">
                <p>Episodes: ${element.episodeOrder}</p>
                <p class="second-element">Channel Network: ${element.network.name}</p>
            </div>
            <div class="comment-items">
            <h3 id="comment-count" class="center">Comments (2)</h3>
            <ul class="comments">
                <li class="comment-item">03/11/2021 Alex: I'd love to buy it</li>
                <li class="comment-item">03/12/2021 Mia: I love</li>
            </ul>
            <h3 class="center">Add a comment</h3>
            <form class="comment-form">
            <input type="text" id="name" name="name" class="name-input" placeholder="Your name">
                <textarea type="text" id="text" name="text" class="text-input" placeholder="Your insights"></textarea>
                <button type="button" id="comment-btn" class="comment-input-btn">Comment</button>
            </form>
            </div>

            <div class="reservation-items">
            <h3 id="Reservation-count" class="center">Reservations (2)</h3>
            <ul class="Resrvations">
                <li class="res-item">03/11/2021 Alex: I'd love to buy it</li>
                <li class="res-item">03/12/2021 Mia: I love</li>
            </ul>
            <h3 class="center">Add a Reservation</h3>
            <form class="reservation-form">
                <input type="text" id="name" name="name" class="name-input" placeholder="Your name">
                <input type="date" id="start date" name="start-date" class="start-input" placeholder="Start date" required>
                <input type="date" id="end start" name="end-date" class="end-input" placeholder="End date" required>
                <button type="button" class="btn btn-dark"> Add Reservation </button>
            </form>
            </div>
            `;
        commentPopup.append(div);
      });
    }
}

export default CommentPopup;