function ratingFilm(input) {
    if (input >= 21) {
        return "Dewasa";
    } else if(input >= 13){
        return "Remaja";
    }else if(input >= 9){
        return "Bimbingan Orang Tua";
    }else{
        return "Semua Usia";
    }
}
let input1 = 15;
let input2 = 32;
let output1 = ratingFilm(input1);
let output2 = ratingFilm(input2);

console.log("Input : " + input1);
console.log("Output : " + output1);
console.log("Input : " + input2);
console.log("Output : " + output2);
