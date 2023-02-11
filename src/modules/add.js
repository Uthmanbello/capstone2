const addComment = ( ind, date, name, comm ) => {
    const commentLists = document.querySelectorAll('.comments-list');
    const commentItem = document.createElement('li');
    commentItem.className = 'comment-item';
    commentItem.innerHTML = `${date} ${name}: ${comm}`;
  
    commentLists[`${ind}`].appendChild(commentItem);
  };
  
  export default addComment;