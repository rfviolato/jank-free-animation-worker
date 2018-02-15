import Worker from './index.worker.js';

const worker = new Worker();
const root = document.getElementById('root');

worker.addEventListener('message', ({ data }) => {
  console.log({ data });

  data.forEach((post) => {
    const div = document.createElement('div');

    div.innerText = post.name;
    root.appendChild(div);
  });
});

worker.postMessage({ url: 'posts' });
