export const commentCounter = (ind, arr) => {
  const commentCountDisplays = document.querySelectorAll('.comment-count');
  commentCountDisplays[ind].innerHTML = `Comments (${arr.length})`;
};
  
export default commentCounter;