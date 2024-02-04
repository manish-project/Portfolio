// let toggle = document.querySelector(".toggle");
// var A = 5;
// var B = A;
// B = B+5;
// console.log(B);
// console.log(A);

// {
//     let c = 10
// }
// c= c+5;
// console.log(c);

function outer() {
  let outerVeriable = 5;
  function inner() {
    console.log(outerVeriable + 5);
  }
  return inner;
}

let innerCall = outer();
innerCall();
