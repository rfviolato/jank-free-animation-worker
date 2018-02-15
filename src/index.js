import Worker from './index.worker.js';
import doAShitLoadOfWork from './shit-load-of-work';

const worker = new Worker();
const root = document.getElementById('root');

worker.postMessage('GO!');
// setInterval(doAShitLoadOfWork, 50);
