function ganjilDanGenap(input) {
    if(input % 2 === 0){
        return "Genap";
    }else{
        return "Ganjil";
    }
}
let input1 = 43;
let input2 = 1032;
let output1 = ganjilDanGenap(input1);
let output2 = ganjilDanGenap(input2);

console.log("Input : " + input1);
console.log("Output : " + output1);
console.log("Input : " + input2);
console.log("Output : " + output2);
