const viewBox = document.querySelector('#view-box');
const seasonCard = document.querySelector('.season-card');
seasonCard.innerHTML = `
<div class="season-card">
<img src="${data[i].image.medium}" alt="season image" class="card-image">
<div class="season-description">
    <h4 class="season-title">Season ${data[i].number}</h4>
    <p class="likes"><span class="likes-counter">5</span> likes <i class="fa-regular fa-heart"></i></p>
</div>
<a href="" class="comments btn-primary">Comment</a><a href="" class="reservation btn-primary">Reservation</a>
</div>
`;