self.onmessage = ({ data }) => {
  console.log('message inside the worker: ', data);
};

self.postMessage('Hello from the worker!');
