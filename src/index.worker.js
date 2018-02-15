const getAPIData = (url) => {
  return fetch(`https://reqres.in/api/${url}`)
    .then((res) => res.json());
};

self.onmessage = ({ data }) => {
  console.log('message inside the worker: ', data);

  getAPIData(data.url)
    .then((res) => {
      self.postMessage(res.data);
    })
};
