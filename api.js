require('es6-promise').polyfill();
require('isomorphic-fetch');

const statusCheck = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  console.log('Status error check');
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default (todo) => {
  return fetch(`${API_PREFIX}/todos`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title: todo})
  })
    .then(statusCheck)
    .then(resp => resp.json())
}