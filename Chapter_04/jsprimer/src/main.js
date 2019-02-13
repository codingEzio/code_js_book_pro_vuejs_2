/* -----  ----- */

const VarFunc = function () {
  console.log("A logging msg inside a function :: var");
};

const ArrowFunc = () => (
  console.log("A logging msg inside a function :: arrow")
);

VarFunc();
ArrowFunc();

/* -----  ----- */

function FuncWithParam(article = "A ", adj) {
  console.log(article + adj + " logging msg inside a function.");
}

FuncWithParam("An ", "awesome");
FuncWithParam("A ", "beautiful");

function FuncRestParam(greeting, name, ...everythingelse) {
  console.log(greeting + " " + name + " !");

  for (let i = 0; i < everythingelse.length; i++) {
    console.log("Extra args:", everythingelse[i]);
  }
}

FuncRestParam("Hello", "C++", "I", "love", "it!");

/* -----  ----- */

function FuncReturnVal(name) {
  return "Hello " + name + "!";
}

function FuncAsParam(param_func) {
  return ("Hello " + param_func() + "!");
}

console.log(FuncReturnVal("TypeScript"));
console.log(FuncAsParam(function () {
  return "TypeScript";
}));

/* -----  ----- */
function FuncDemoLet(name) {
  let msg = "Hey, `var`!";

  if (name == "John") {
    let msg = "`var` inside [if]";
    console.log(msg);
  } else {
    let msg = "`var` inside [else]";
    console.log(msg);
  }

  console.log(msg);
}


function FuncDemoVar(name) {
  var msg = "Var outside";

  if (name == "John") {
    var msg = "`var` inside [if]";
    console.log(msg);
  } else {
    var msg = "`var` inside [else]";
    console.log(msg);
  }

  console.log(msg);
}

FuncDemoLet("John"); // Tightened scope & intuitive
FuncDemoVar("John"); // Its scope is inside the containing function (FFS) 

/* -----  ----- */
function FuncWithClosure(name) {
  let greeting = "Hello ";
  let innerFunc = function () {
    return (greeting + name + "!");
  };

  return innerFunc();
}

console.log(FuncWithClosure("Yorkie"));

/* ----- Some common string methods ----- */
const tp_ex_str1 = " This IS  a string ";

console.log(tp_ex_str1)
console.log(tp_ex_str1.length)
console.log(tp_ex_str1.charAt(3))
console.log(tp_ex_str1.concat("more", "mmore"))
console.log(tp_ex_str1.replace("IS", "is"));
console.log(tp_ex_str1.slice(1, -1));
console.log(tp_ex_str1.split("i"));
console.log(tp_ex_str1.toUpperCase());
console.log(tp_ex_str1.toLowerCase());
console.log(tp_ex_str1.trim());

const to_who = "Alex";
console.log(`Hello ${to_who}`); // `${}`

/* ----- Identity Comparison ----- */
const identity_double_eq = (5 == "5"); // true
const identity_triple_eq = (5 === "5"); // false 
console.log("Difference:", identity_double_eq, identity_triple_eq);

/* ----- Convert to String ----- */
const two_ways_conv_to_str = (5).toString() + String(5);
console.log("Double five:", two_ways_conv_to_str);

const numTEN = 10;
console.log(
  numTEN.toString(),
  numTEN.toString(2),
  numTEN.toString(8),
  numTEN.toString(16),
);
console.log(
  numTEN.toFixed(10),
  numTEN.toPrecision(10),
  numTEN.toExponential(10)
);

/* ----- Convert to Number ----- */
const strTEN = "10";

console.log(
  Number(strTEN),
  parseInt(strTEN),
  parseFloat(strTEN),
)

/* ----- Array :: Creating one ----- */
let tp_ex_arr1 = ["Conner", "Robot"]

let tp_ex_arr2 = new Array();
tp_ex_arr2[0] = "Conner";
tp_ex_arr2[1] = "Robot";

console.log(tp_ex_arr1, tp_ex_arr2);

/* ----- Arrary :: Iterating ----- */
console.log(`Index 0: ${tp_ex_arr1[0]}`);
console.log(`Index 1: ${tp_ex_arr1[1]}`);

for (let i = 0; i < tp_ex_arr1.length; i++) {
  console.log(`Index ${i}: ${tp_ex_arr1[i]}`);
}

// My way & the clever way
tp_ex_arr1.forEach(i => {
  console.log(`Index ${tp_ex_arr1.indexOf(i)}: ${i}`);
});
tp_ex_arr1.forEach((val, idx) => {
  console.log(`Index ${idx}: ${val}`);
});

/* ----- Some common Array methods ----- */
let arr_ten_twenty = [10, 20];

console.log(arr_ten_twenty.concat([30])); // return a NEW array
console.log(arr_ten_twenty.join("/"));

// Permanently changed
arr_ten_twenty.push(30); // append to the end
arr_ten_twenty.unshift(0); // insert to the start
arr_ten_twenty.shift(); // remove the 1st
arr_ten_twenty.pop(); // remove the last

arr_ten_twenty
  .reverse() // => [20, 10]
  .reverse(); // => [10, 20]

console.log([10, 20, 0].sort());

console.log(arr_ten_twenty.slice(0, 2)); // [10, 20]
console.log(arr_ten_twenty.splice(0, 1)); // Start at 0, get 1 element

// Those I havn't done yet
// -- [ ] some, every
// -- [ ] forEach
// -- [ ] filter, map, reduce
// -- [ ] include, find, findIndex

// An example though
let tp_ex_arr3 = [{
    name: "Hat",
    price: 24,
    stock: 10
  },
  {
    name: "Kayak",
    price: 289.99,
    stock: 1
  }, {
    name: "Soccer Ball",
    price: 10,
    stock: 0
  }, {
    name: "Running Shoes",
    price: 116.50,
    stock: 20
  }
]

let totalValue = tp_ex_arr3
  .filter(item => item.stock > 0)
  .reduce((prev, item) => prev + (item.price * item.stock), 0);
console.log(`Total value: $${totalValue.toFixed(2)}`); // $$ => $

/* ----- Ways to creating an Object ----- */
let tp_exp_obj1 = new Object();
tp_exp_obj1.name = "Yorkie";
tp_exp_obj1.age = 30;

console.log(tp_exp_obj1);

let hername = "Jen Loop"
let tp_exp_obj2 = {
  hername, // auto using var name as key
  age: 20,
  printHerProfile: function () {
    console.log(`Hello, my name is ${tp_exp_obj2.hername}`);
    console.log(`And my age is ${tp_exp_obj2.age}`);
  },
  printThisWay() {
    console.log(`Hello, my name is ${tp_exp_obj2.hername}`);
    console.log(`And my age is ${tp_exp_obj2.age}`);
  },
}
tp_exp_obj2.printHerProfile();
tp_exp_obj2.printThisWay(); // more natural, huh?

let tp_exp_obj3 = {};

Object.assign(tp_exp_obj3, tp_exp_obj2); // pour the 2nd => into 1st 
tp_exp_obj3.printHerProfile();

/* ----- Brief intro about "modules" (still unfinished) ----- */
import addFuncByRelPath from "./maths/sum"; // ./x/y/z/
import addFuncByRelToSrc from "@/maths/sum"; // src/x/y/z/
import vueFuncForTesting from "vue"; // ../node_modules/

let total_rel = addFuncByRelPath([10, 20, 30]);
let total_reltosrc = addFuncByRelToSrc([10, 20, 30]);

console.log(total_rel);
console.log(total_reltosrc);
console.log(vueFuncForTesting.toString());

import {
  multiply as mulFunc,
  subtract as subFunc,
} from "./maths/operations";

let vals_for_modopt = [10, 20, 30];
console.log(`Add:\t${addFuncByRelPath(vals_for_modopt)}`);
console.log(`Mul:\t${mulFunc(vals_for_modopt)}`);
console.log(`Sub:\t${subFunc(1000, vals_for_modopt)}\n\n`);

import * as mathopts from "./maths/operations";
console.log(`Mul:\t${mathopts.multiply(vals_for_modopt)}`);
console.log(`Div:\t${mathopts.divide(1000, 20)}`);
console.log(`Sub:\t${mathopts.subtract(1000, vals_for_modopt)}\n\n`);

/* -----  ----- */

import * as mrmat from "./maths";

console.log(`Sum: ${mrmat.addition(vals_for_modopt)}`);
console.log(`Mea: ${mrmat.mean(vals_for_modopt)}`);

import {
  addition as add,
  multiply as mul,
  subtract as sub,
  mean as avg
} from "./maths";

// blabla

/* ----- Async ----- */
import {
  asyncAdd
} from "./maths";

let vals_for_asyncadd = [10, 20, 30];
let vals_asyncadd_total = asyncAdd(vals_for_asyncadd);

// Main Total: undefined (after 1 sec)
// Async Total: 60 
console.log(`asyncAdd :: Main Total: ${vals_asyncadd_total}`);

/* ----- Async Promise ----- */
import {
  asyncProAdd
} from "./maths";

let vals_for_asyncproadd = [30, 30, 40];

// (after 1 sec)
// Async Total: 100 
// Main Total: 100 
asyncProAdd(vals_for_asyncproadd)
  .then(total => console.log(`asyncProAdd :: Main Total: ${total}`));

/* -----  ----- */

let vals_for_syntax_async = [10, 20, 30];

// (after 1 sec)
// Async Total: 100 
// Main Total: 100
async function doTask() {
  let total = await asyncAdd(vals_for_syntax_async);
  console.log(`asyncSyntax :: Main Total: ${total}`);
}

doTask();