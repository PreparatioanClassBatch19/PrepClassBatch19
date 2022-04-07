function tahunKabisat(input) {
    if(input % 400 === 0) {
        return input + " adalah tahun kabisat";
    }else if(input % 100 === 0){
        return input + " bukan tahun kabisat";
    }else if(input % 4 === 0){
        return input + " adalah tahun kabisat";
    }else{
        return input + " bukan tahun kabisat";
    }
}
let input1 = 1900;
let input2 = 2000;
let input3 = 2001;
let input4 = 2016;

let output1 = tahunKabisat(input1);
let output2 = tahunKabisat(input2);
let output3 = tahunKabisat(input3);
let output4 = tahunKabisat(input4);

console.log("Input : " + input1);
console.log("Output : " + output1);
console.log("Input : " + input2);
console.log("Output : " + output2);
console.log("Input : " + input3);
console.log("Output : " + output3);
console.log("Input : " + input4);
console.log("Output : " + output4);