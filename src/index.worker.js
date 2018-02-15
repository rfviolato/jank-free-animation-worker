import doAShitLoadOfWork from './shit-load-of-work';

self.onmessage = () => {
  setInterval(doAShitLoadOfWork, 50);
};
