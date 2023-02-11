export const commentCounter = () => {
    const updatedCounter = document.querySelector('comments-list').getElementsByTagName('li').length;
    return updatedCounter;
  };
  
  export default commentCounter;