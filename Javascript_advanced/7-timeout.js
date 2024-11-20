console.log('Start of the execution queue');

// asynchronous code only runs once synchronous code is finished
setTimeout(() => {
  console.log('Final code block to be executed');
}, 0);

for (let i = 0; i < 100; i++) {
  console.log(i);
}

console.log('End of the loop printing');
