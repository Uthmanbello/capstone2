//app_id: MgbGOFTaDhTVdgSX8BJW

export const storedComments = async (id) => {
  const response = await window.fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MgbGOFTaDhTVdgSX8BJW/comments?item_id=${id}`);
  const data = await response.json();
  return { status: response.status, data };
};

export const newComment = async ({ id, name, comm }) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MgbGOFTaDhTVdgSX8BJW/comments', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify({ item_id: id, username: name, comment: comm }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });
  const data = await response.text();
  return { status: response.status, data };
};
