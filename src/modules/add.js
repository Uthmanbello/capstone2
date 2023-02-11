const addComment = ( index, date, name, comm ) => {
    const commentLists = document.querySelector('.comments-list');
    const commentItem = document.createElement('li');
    commentItem.className = 'comment-item';
    commentItem.innerHTML = `${date} ${name}: ${comm}`;
  
    commentLists[index].appendChild(commentItem);
  };
  
  export default addComment;