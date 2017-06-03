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
  const form = new FormData();
  form.append('title', todo);

  return fetch(`${API_PREFIX}/todo`, {
    method: "POST",
    body: form,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(statusCheck)
    .then(resp => resp.json())
}