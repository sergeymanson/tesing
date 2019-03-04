// const constant = a => {
//   value: null,
//   [Symbol.toPrimitive](hint) {
//     debugger
//     return eval(this.valueOf());
//   }
//
//   // valueOf() {
//   //   debugger
//   //   return f(a);
//   // }
// };
//
// const figure = {
//   id: 1,
//   name: 'Прямоугольник',
//   [Symbol.toPrimitive](hint) {
//     if (hint === 'string') {
//       return this.name;
//     } else if (hint === 'number') {
//       return this.id;
//     } else {  // default
//       return this.name;
//     }
//   }
// }

function zero (x) {
  let value = 0;

  if (value === null) {
    value = x;
  }

  return String(value)
  debugger
};

//
// const operator  = sign => b => a => {
//   debugger
//   return `${a.valueOf()} ${sign} ${b.valueOf()}`
// };
//
// const zero   = constant(0);
// const one   = constant(1);
// const two   = constant(2);
// const three = constant(3);
// const four = constant(4);
// const five  = constant(5);
// const six   = constant(6);
// const seven   = constant(7);
// const eight = constant(8);


// const plus      = operator("+");
// const minus     = operator("-");
// const times     = operator("*");
// const dividedBy = operator("/");
//


// checkCalculations = () => {
//   console.log( three(times(five()))    );
//
//   alert( three(times(five()))    );
//
// };
// checkCalculations()