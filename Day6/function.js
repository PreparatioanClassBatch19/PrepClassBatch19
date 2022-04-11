const buku = {
    nama : "One Piece",
    jumlah : 10
}
function stokBuku(nama, jumlah){
    for (let index = jumlah; index >= 0; index--) {
        if(index !==0){
            console.log("Buku dengan nama "+ nama + " tersedia sebanyak " + index + " buku");
        }else if(index === 0){
            console.log("Buku " + nama + " Tidak Tersedia");
        }   
    }
}

stokBuku(buku.nama,buku.jumlah);
