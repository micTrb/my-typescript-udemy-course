let names: Array<string> = ["Mark", "Hannah"];

type DataStore = {
  [key: string]: string | number;
};

let store: DataStore = {};
store.name = "Max";
store.isValid = true;

type DataCenter<T> = {
  [pippo: string]: T;
};

//put the concrete type value you wanna use in the angle brackets

let center: DataCenter<string | boolean> = {};

center.feature = true;
center.name = "Max";
center.age = 43; // error

// FUNCTIONS

//Definition of a generic

//normal functions
function merge(a: any, b: any) {
  return [a, b];
}

function mergeGeneric<T>(a: T, b: T) {
  return [a, b];
}

let ids = mergeGeneric<number>(2, 3);
