class Hundred {
  constructor(url) {
    this.url = url;
  }

  getData = async (url) => {
    await fetch(url, {
      method: 'GET',
    }).then((response) => response.json())
      .then((data) => {
        localStorage.setItem('data', JSON.stringify(data));
      });
  }
}

export default Hundred;