const buku = {
    nama : "One Piece",
    jumlah : 10
}
function stokBuku(nama, jumlah){
    if(jumlah !==0){
        console.log("Buku dengan nama "+ nama + " tersedia sebanyak " + jumlah + " buku");
    }
}

stokBuku(buku.nama,buku.jumlah);