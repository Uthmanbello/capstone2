class Hundred {
  constructor(url) {
    this.url = url;
  }

  static createAppID = async (url) => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('appID', JSON.stringify(data));
      });
  };

  // Method to fetch content of the homepage
  getData = async (url) => {
    await fetch(url, {
      method: 'GET',
    }).then((response) => response.json())
      .then((data) => {
        localStorage.setItem('data', JSON.stringify(data));
      });
  }

  // Methos to fetch likes
  getLikes = async (url) => {
    await fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('likes', JSON.stringify(data));
      });
  };

  // Method to add/update likes
  addScore = async (url, id, likes) => {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ id, likes }),
    }).then((response) => response.json());
  };
}

export default Hundred;