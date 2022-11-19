
// function genapGanjil() {
//     let tampungGenap = ''
//     let tampungGanjil = ''
//     for (let index = 1; index <= 100 ; index++) {
//         if(index % 2 === 0){
//             tampungGenap += index
//         }else {
//          tampungGanjil += index
//         }   
//      }
//  return console.log(`nilai genap${tampungGenap} dan nilai ganjil ${tampungGanjil}`)
// }
// (genapGanjil())

// function bilanganPrima() {
//     for (let index = 0; index <= 100; index++) {
//         if(index  % 2 != 0 && index != 1 || index === 2 ){
//             console.log(index)
//         }
//     }
// }
// bilanganPrima()

function fibonacci() {
    let result = []
    let hasil = 1
    let jumlah1 = 1
    let jumlah2 = 0
    for(let index = 0; index < 10 ; index++) {
        result.push(hasil)
        hasil = jumlah1 + jumlah2;
        jumlah1 = jumlah2;
        jumlah2 = hasil;
    }
 return console.log(result)
 }
fibonacci()