import doAShitLoadOfWork from './shit-load-of-work';

let interval;

self.onmessage = ({ data }) => {
  if (data === 'GO') {
    interval = setInterval(doAShitLoadOfWork, 50);
  }
  else if (data === 'STOP') {
    clearInterval(interval);
  }
};
