function forIn() {
    var mahasiswa = {
        nama: "Zero",
        umur: 22,
        jurusan: "Teknik Informatika",
        semster: 2
    }

    for (var x in mahasiswa) {
        console.log(mahasiswa[x])
    }
}

forIn()