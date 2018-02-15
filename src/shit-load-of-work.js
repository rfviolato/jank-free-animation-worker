const doAShitLoadOfWork = (iterations = 100000) => {
  console.log('Doing a shit load of work');

  for (let i = 0; i < iterations; i += 1) {
    JSON.parse(`{ "hello": "${Math.random()}" }`);
  }
};

export default doAShitLoadOfWork;
