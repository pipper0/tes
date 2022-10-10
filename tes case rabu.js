const prompt = require("prompt-sync")();
function faktorial(x){
    if (x===0) return 1;
    return x * faktorial(x-1);
}
x = parseInt(prompt('masukkan nilai faktorial: '));
console.log(faktorial(x))