function mergeGeneric<T, U>(a: T, b: U) {
  return [a, b];
}

let ids = mergeGeneric<number, string>(2, "Max");

function mergeObj<T extends object>(a: T, b: T) {
  return { ...a, ...b };
}

const merged = mergeObj({ userName: "Tom" }, { age: 34 });
console.log(merged);

// Second merge

function mergeObjSecond<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const mergedSecond = mergeObjSecond({ userName: "Tom" }, { age: 34 });
console.log(merged);
