console.log('Starting App');


setTimeout(() => {
console.log('Inside Of Callback');
}, 2000);

setTimeout(() => {
  console.log('SecondCallback');
},0)

console.log('Finishing App');
