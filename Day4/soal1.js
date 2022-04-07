
function nilaiAkhir(nilai) {
    if (nilai >= 90) {
        return "A";
    } else if(nilai >= 80 && nilai <= 89){
        return 'B';
    } else if(nilai >= 70 && nilai <= 79){
        return 'C';
    } else if(nilai >= 60 && nilai <= 69){
        return 'D';
    }else{
        return 'E';
    }
}

let input1 = 30;
let input2 = 75;
let output1 = nilaiAkhir(input1);
let output2 = nilaiAkhir(input2);

console.log("Input : " + input1);
console.log("Output : " + output1);
console.log("Input : " + input2);
console.log("Output : " + output2);
