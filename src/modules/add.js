const addComment = (date, name, comm) => `<li>${date} ${name}: ${comm}</li>`;

const addReservation = (username, stdate, edate) => `<li>${stdate} - ${edate} by ${username}</li>`;

export { addComment, addReservation };