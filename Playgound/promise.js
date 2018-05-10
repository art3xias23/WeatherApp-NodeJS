// const yargs = require('yargs');
// var argv = yargs.options({
//   a:{
//     alias: 'a',
//     describe: 'Enter a value for a',
//     demand: true
//   },
//   b:{
//     alias: 'b',
//     describe: 'Enter a value for b',
//     demand: true
//   }
// })
// .help()
// .alias('help', 'h')
// .argv;
//
// var addAsync = (a, b) =>
// {
//   return new Promise((resolve,reject) =>
// {
// setTimeout(() =>
// {
// if(typeof a === 'number' && typeof b==='number')
// {
//   resolve(a+b);
// }
// else {
//   reject('a and b need to be numbers');
// }
// }, 2500);
// });
// };
//
// addAsync(argv.a, argv.b).then((res) =>
// {
// console.log('Result: ', res);
// }, (errorMessage) =>
// {
//   console.log(errorMessage);
// });

const yargs = require('yargs');

const argv = yargs
    .options(
  {
    a:{
      alias: 'a',
      demand: true,
      describe: 'Enter a value for a'
    },
    b:{
      alias: 'b',
      describe: 'Enter a value for b',
      demand:  true
    }
  })
  .help()
  .argv;


//   var asyncAdd = function(a,b)
//   {
//     return new Promise(function(resolve, reject)
//     {
//       setTimeout(function()
//       {
//         if (typeof a==='number' && typeof b==='number')
// {
//   resolve(a+b);
// }
// else {
//   reject('Both a and b need to be numbers');
// }
// },2500)
// })
// }
//
//   // addAsync(argv.a, argv.b);
//   asyncAdd(argv.a,argv.b).then(function(res)
// {
// console.log(res);
// return asyncAdd(res, 33);
// }, errorMessage= () =>
// {
//   console.log(errorMessage);
// }).then((res) =>{
//
//   console.log(res);
// }, (errorMessage) =>
// {
//   console.log(errorMessage);
// });

var asyncAdd = (a,b) =>
{
return new Promise((resolve, reject) =>
{
  setTimeout(() => {

  if (typeof a==='number' && typeof b==='number')
  {
     resolve(a+b);
  }
  else {
     reject('Both a and b need to be numebrs');
  }
}, 2500)
  })
}

asyncAdd(argv.a, argv.b)
.then((res) =>
{
  return asyncAdd(res, 33).then((res) =>
{
console.log('End Result: ', res);
})}).catch((errorMessage) =>
{
  console.log(errorMessage);
});
