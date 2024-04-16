// 1) Verilmiş 3 rəqəmli ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.

// let eded = parseInt(prompt("Ədədi daxil edin"))
// let reqemler_cem = 0
// let reqemler_hasil = 1
// let count = 0
// let qaliq = 0

// while (eded > 0) {
//     count++
//     qaliq = eded % 10
//     reqemler_cem += qaliq
//     reqemler_hasil*=qaliq
//     eded -= qaliq
//     eded /= 10
// }
// let reqemler_average = reqemler_cem / count
// alert(`Rəqəmlərinin cəmi: ${reqemler_cem}`);
// alert(`Rəqəmlərinin hasili: ${reqemler_hasil}`)
// alert(`Rəqəmlərinin ədədi ortası: ${reqemler_average}`)

// 2) Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.
// let eded = parseInt(prompt("Bölünəni daxil edin"))
// let bolenler = []
// let counter=0
// for (let i = 1; i <= eded; i++) {
//     if (eded % i == 0){
//         bolenler.push(i)
//     }


// }
//     alert(`Bütün bölənlər:${bolenler}`);


// 3) Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.
// let eded = parseInt(prompt("Bölünəni daxil et"))
// let bolenler = []
// let counter = 0
// for (let i = 1; i <= eded; i++) {
//     if (eded % i == 0){
//         bolenler.push(i)
//         counter++
//     }
// }
// alert(`Bölənlərin sayı: ${counter}`);
// 4) for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} x ${i}= ${i**2}`);
// }
// 5)  for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000


// console.log("i    i^2   i^3");
// for (let i = 0; i <= 10; i++) {
//     console.log(`${i}    ${i**2}    ${i**3}`);
// }


// 6)  0 - 100 arası yalnız sadə ədədləri console'da çap edin
// function asalMi(sayi) {
//     if (sayi <= 1) return false;
//     if (sayi <= 3) return true;
//     if (sayi % 2 === 0 || sayi % 3 === 0) return false;
//     let i = 5;
//     while (i * i <= sayi) {
//         if (sayi % i === 0 || sayi % (i + 2) === 0) return false;
//         i += 6;
//     }
//     return true;
// }

// console.log("0 - 100 arası sadə ədədlər:");
// for (let i = 0; i <= 100; i++) {
//     if (asalMi(i)) {
//         console.log(i);
//     }
// }
// 7) 0 - 100 arası tək ədədlərin və cüt ədədlərin cəmini tapın
// let tekcem=0
// let cutcem=0
// for(let i=0;i<100;i++){
//     if(i%2==0){
//      cutcem+=i
//     }
//     else{
//     tekcem+=i
//     }
// }
// console.log(`Cüt ədədlərin cəmi: ${cutcem}`);
// console.log(`Tək ədədlərin cəmi:${tekcem}`);

