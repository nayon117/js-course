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