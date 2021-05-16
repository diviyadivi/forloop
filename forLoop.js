let n=3;
let number=0;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        number += 1;
    }
    number += "\n";
}
console.log(number);


let n = 3;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j + "","\n");
    }
    console.log("\n");
}


let n = 3;
let number=0;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        number += j;
    }
    number += "\n";
}
console.log(number);