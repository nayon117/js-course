// Logical operators only used when we have two or more conditions and result comes from both of their participation.

//   && , || , !

const a = 10;
const b = 20;
const c = 30;
const d = 40;

// And operator
if (a > b && c > d) {
    console.log('A and C are greater than B and D');
} else {
    console.log('at least one false');
}

// or operator
if ( b> a || c > d) {
    console.log('A and C are greater than B and D');
} else {
    console.log('at least one false');
}

// Not opeator
const check = !(a>b)
console.log(check);
// Not opeator
const check1 = !(a>b)
console.log(check);

// Ternary operator

const n = 9;
const str = ''

const result = n%2===0 ? "EVEN" : "ODD"
console.log(result);

const m = 9;
const str1 = ''

const result1 = n%4===0 ? "EVEN" : "ODD"
console.log(result);