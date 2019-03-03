const constant = a => (f = x => x) => ({
  [Symbol.toPrimitive](hint) {
    return eval(this.valueOf());
  },

  valueOf() {
    return f(a);
  }
});

const operator  = sign => b => a => {
  return `${a.valueOf()} ${sign} ${b.valueOf()}`
};

const one   = constant(1);
const two   = constant(2);
const three = constant(3);
const five  = constant(5);
const six   = constant(6);
const eight = constant(8);


const plus      = operator("+");
const minus     = operator("-");
const times     = operator("*");
const dividedBy = operator("/");


alert([
  three(times(five())),                      // 3 * 5
  // eight(minus(two())),                       // 8 - 2
  // one(plus(six(dividedBy(three())))),        // 1 + 6 / 3
  // five(minus(two(minus(two(minus(one())))))) // 5 - 2 - 2 - 1
]);