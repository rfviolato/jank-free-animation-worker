import Worker from './index.worker.js';

const worker = new Worker();
const root = document.getElementById('root');

worker.addEventListener('message', ({ data }) => {
  root.innerText = `Message from the worker: ${data}`;
});

worker.postMessage('What up');
