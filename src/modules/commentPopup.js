import { storedComments, storedReservations } from './api.js';
import { commentCounter, reservationCounter } from './counter.js';

class CommentPopup {
    getComments = async (id) => {
      const { data } = await storedComments(id);

      return Array.isArray(data) ? data : [];
    }

    getReservations = async (id) => {
      const { data } = await storedReservations(id);

      return Array.isArray(data) ? data : [];
    }

    seasonList = async (element) => {
      const commentPopup = document.querySelector('.comment-popup');
      const div = document.createElement('div');
      div.classList.add('popup-content');
      const data = await this.getComments(element.id);
      const data1 = await this.getReservations(element.id);
      const commentCount = commentCounter(data);
      const reservationCount = reservationCounter(data1);
      const comments = data.map((item) => `<li>${item.creation_date} ${item.username}: ${item.comment}</li>`).join(' ');
      const reservations = data1.map((item) => `<li>${item.date_start} - ${item.date_end} by ${item.username}</li>`).join(' ');
      div.innerHTML = `
            <div class="popup-header">
                <img src="${element.image.original}" alt="season ${element.number}" class="popup-image">
                <div class="popup-close">
                    <i class="fa-regular fa-circle-xmark"></i>
                </div>
            </div>
            <h2 class="popup-title center margin-b">Season ${element.number}</h2>
            <div class="synopsis margin-b">
                <p>Premier Date: ${element.premiereDate}</p>
                <p class="second-element end">End Date: ${element.endDate}</p>
            </div>
            <div class="synopsis margin-b">
                <p>Episodes: ${element.episodeOrder}</p>
                <p class="second-element">Channel Network: ${element.network.name}</p>
            </div>
            <div class="comment-items">
            <h3 id="comment-count" class="center comment-count margin-b">Comments(${commentCount})</h3>
            <ul class="comments-list margin-b">
                ${comments}
            </ul>

            <h3 class="center margin-b">Add a comment</h3>
            <form class="comment-form">
                <input type="hidden" name="id" id="element-id" value="${element.id}" />
                <input type="text" id="name" name="name" class="name-input comment-name input-style" placeholder="Your name">
                <textarea type="text" id="text" name="comm" class="text-input input-style" placeholder="Your insights"></textarea>
                <button type="submit" id="comment-btn" class="comment-input-btn btn-primary">Comment</button>
            </form>
            </div>

            <div class="reservation-items">
            <h3 id="Reservation-count" class="center margin-b reserv-header">Reservations (${reservationCount})</h3>
            <ul class="reservations-list margin-b">
                ${reservations}
            </ul>
            <h3 class="center margin-b">Add a Reservation</h3>
            <form class="reservation-form">
                <input type="hidden" name="id1" id="element-id" value="${element.id}" />
                <input type="text" id="username" name="username" class="name-input input-style" placeholder="Your name">
                <input type="date" id="start-date" name="start_date" class="name-input start-input input-style" placeholder="Start date" required>
                <input type="date" id="end-date" name="end_date" class="name-input end-input input-style" placeholder="End date" required>
                <button type="submit" class="res-input-btn btn-primary"> Add Reservation </button>
            </form>
            </div>
            `;
      commentPopup.append(div);
    }
}

export default CommentPopup;