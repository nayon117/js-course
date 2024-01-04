const str = "1000"
const n = 10;
// console.log(Number.parseInt(str)); convert string to num
// console.log(n.toString());   convert num to string

// console.log(Boolean(Infinity));  return true ;

//  we can also convert boolean to string
const x = true;
// console.log(x.toString());

// ----------truthy falsy values ----------------
// '', 0 , null, undefined, NAN     all are falsy values rest of are truthy values

console.log(Boolean(''));
console.log(Boolean('saglahfh'));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(246));

// constructors   Number, String, Boolean