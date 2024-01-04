// There are two types of data types in javascript

// 1.primitive - primitive types are defined by JS
// number, string, boolean, null undefined

// 2.Non-primitive-non-primitive are user defined data types
//  Array, Object, Function

// -----------------Number ---------------
// we can  get 64 bit to store a floating number
// we can  get 54 bit to store a Integer number

// Integer 
const n = 1555;
// Floating
const m = 14.67;

// we can convert a string into a number by using Number;
// ex:
const l = "45"
// console.log(Number(l));

// we can convert a number into a floating number by using parseFloat
// we can convert a Floating number into a integer by using parseInt

// console.log(Number.parseFloat(l));
// console.log(Number.parseInt(l));

// console.log(Number.MAX_VALUE);  to see the higest value we can store
// console.log(Number.MIN_SAFE_INTEGER); to see the lowest value we can store;

// console.log(1/0);   infinity
// console.log("abc" * 12);   NAN-Not A Number

// --------------string---------------------------------

// Anything wrapped between quotes is called string
const str = 'string'
const str2 = "string"
const str3 = `string`
const str4 = String(145)
// console.log(str, str2, str3, str4);

// ---------------boolean-------------------------------
// if the answer always be either true or false then we can call it boolean
const b1 = true; 
const b2 = false;
const b3 = Boolean(true)
const b4 = Boolean(false)
// console.log(b3,b4);

// ------------null vs undefined ------------------
// Null  is a special type used as a absence of an object

// A variable without value always store undefined
// A variable with unknown value can store null;

// var abc;  undefined
// const xyz = null;   null

// octal and hexadecimal 
const hex = 0xff;
console.log(hex);

const oct = 0o756;
console.log(oct);