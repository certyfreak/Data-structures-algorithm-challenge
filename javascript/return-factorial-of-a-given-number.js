"use strict";
function factorial(num) {
    let counter = 0;
    let facto = 0;
    for (let i = 0; i <= num; i++) {
        if (facto == 0) {
            facto = i;
        }
        else {
            facto *= i;
        }
    }
    return facto;
}
console.log(factorial(4));
