// Soal:
// * Buatlah sebuah sistem pembayaran dengan skema berikut:
// * 1. Berikut adalah beberapa barang yang dijual:
// *    a.  Sepatu dengan harga Rp300000.
// *    b.  Baju dengan harga Rp100000.
// *    c.  Celana denga harga Rp75000.
// *    dengan catatan pembeli hanya dapat membeli satu jenis barang saja.
// * 2. Jika seorang pembeli adalah member maka akan mendapatkan diskon Rp25000.
// * 3. Jika seorang pembeli membeli barang tersebut lebih dari 10 buah maka pembeli mendapatkan diskon 5%.
// * 4. Jumlah uang yang dimiliki oleh pembeli adalah Rp1000000.
// * 5  Jika uang yang dimiliki mencukupi maka munculkan kembaliannya.
// * 6. Jika uang yang dimiliki tidak cukup maka munculkan "Saldo anda tidak mencukupi"
// */


let goods = {
    sepatu : 300000,
    baju : 100000, 
    Celana : 75000
}

let pilihan = goods.Celana;
let jumlah = 19

let human = {
    member : 25000,
    baranglebih : 5/100,
    uang : 1000000
}

let total = 'bukan member'

function casir(){
    if(total === 'member' && jumlah < 10){
    total +=  human.uang - (jumlah * pilihan) +(jumlah * human.member)
    }
    else if(total != 'member' && jumlah < 10){
        total += human.uang - (jumlah * pilihan)
    }
    else if(total === 'member' && jumlah > 10 ){
        total += human.uang - (jumlah * pilihan ) + (jumlah * human.member) + (jumlah * pilihan * human.baranglebih)
    }
    else if(total != 'member' && jumlah > 10){
        total += human.uang - (jumlah * pilihan) + (jumlah * pilihan * human.baranglebih)
    }

 return total
}
console.log(casir())

let jumlahKeseluruhan = casir()

function final() {
    if(jumlahKeseluruhan < 0){
        console.log('maaf uang anda tidak cukup')
    }
    else if(jumlahKeseluruhan > 0){
        console.log(jumlahKeseluruhan)
    }
    return jumlahKeseluruhan  
}
final()