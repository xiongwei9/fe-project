console.log(`here is demo.worker.js`);
self.onmessage = (event) => {
  console.log('accept message: ', event.data);
};
