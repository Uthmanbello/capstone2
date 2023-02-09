class CommentPopup {
    seasonList = (arr) => {
      const commentPopup = document.querySelector('.comment-popup');
      arr.forEach((element) => {
        const div = document.createElement('div');
        div.classList.add('popup-content', 'd-none');
        div.innerHTML = `
    <div class="popup-header">
    <img src="${element.image.original}" alt="season ${element.number}" class="popup-image">
    <i class="fa-solid fa-xmark popup-close"></i>
</div>
<h2 class="popup-title center">Season ${element.number}</h2>
<div class="synopsis">
    <p>Premier Date: ${element.premiereDate}</p>
    <p class="second-element">End Date: ${element.endDate}</p>
</div>
<div class="synopsis">
    <p>Episodes: ${element.episodeOrder}</p>
    <p class="second-element">Channel Network: ${element.network.name}</p>
</div>
<h3 id="comment-count" class="center">Comments (2)</h3>
<ul class="comments">
    <li class="comment-item">03/11/2021 Alex: I'd love to buy it</li>
    <li class="comment-item">03/12/2021 Mia: I love</li>
</ul>
<h3 class="center">Add a comment</h3>
<form class="comment-form">
    <input type="text" id="name" name="name" class="name-input" placeholder="Your name">
    <textarea type="text" id="text" name="text" class="text-input" placeholder="Your insights"></textarea>
    <button type="button" id="comment-btn" class="comment-input-btn">comment</button>
</form>
      `;
      commentPopup.append(div);
      });
    }
  }
  
  export default CommentPopup;