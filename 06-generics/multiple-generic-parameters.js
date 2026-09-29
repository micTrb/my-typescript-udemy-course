"use strict";
function mergeGeneric(a, b) {
    return [a, b];
}
let ids = mergeGeneric(2, "Max");
function mergeObj(a, b) {
    return { ...a, ...b };
}
const merged = mergeObj({ userName: "Tom" }, { age: 34 });
console.log(merged);
