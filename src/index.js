import Worker from './index.worker.js';
import doAShitLoadOfWork from './shit-load-of-work';

const worker = new Worker();
const whosDoingTheWork = document.getElementById('whos-doing-the-work');
const btn = document.getElementById('trigger-btn');
const WORK_TARGETS = { MAIN_THREAD: 'MAIN_THREAD', WORKER: 'WORKER' };
const WORKER_MSGS = { START: 'START', STOP: 'STOP' };

let workTarget = WORK_TARGETS.MAIN_THREAD;
let interval;

const changeUIState = () => {
  if (workTarget === WORK_TARGETS.MAIN_THREAD) {
    whosDoingTheWork.innerText = 'Main thread';
  }
  else {
    whosDoingTheWork.innerText = 'The Worker';
  }
};

btn.addEventListener('click', () => {
  if (workTarget === WORK_TARGETS.MAIN_THREAD) {
    workTarget = WORK_TARGETS.WORKER;
    worker.postMessage(WORKER_MSGS.START);
    clearInterval(interval);
    changeUIState();
  }
  else {
    workTarget = WORK_TARGETS.MAIN_THREAD;
    worker.postMessage(WORKER_MSGS.STOP);
    interval = setInterval(doAShitLoadOfWork, 50);
    changeUIState();
  }
});

interval = setInterval(doAShitLoadOfWork, 50);
