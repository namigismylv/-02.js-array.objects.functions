// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Davud", scores: [100, 100, 100] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
// ];

// // #studentlərin ortalama score'nu yeni bir arrayda yığın

// const averageScores = [];

// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     const scores = student.scores;
//     let sum = 0;
//     for (let j = 0; j < scores.length; j++) {
//         sum += scores[j];
//     }
//     const average = sum / scores.length;
//     averageScores.push({ name: student.name, average: average });
// }

// console.log(averageScores);

// -------------------------------

// const webTechs = [
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "JS",
//     "Redux",
//     "Node",
//     "JS",
//     "MongDB",
// ];


// //   # webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın
// let str = []
// for (let i = 0; i < webTechs.length; i++) {
//     if (webTechs[i].length > 4) {
//         str.push(webTechs[i])
//     }
// }
// console.log(str);

// ------------------------

// const products = [
//     {
//         id: 1,
//         title: "Smartphone",
//         description: "A high-end smartphone with the latest features.",
//         price: 799.99,
//     },
//     {
//         id: 2,
//         title: "Laptop",
//         description: "Powerful laptop with a large screen and fast processor.",
//         price: 1299.99,
//     },
//     {
//         id: 3,
//         title: "Coffee Maker",
//         description: "An automatic coffee maker with a built-in grinder.",
//         price: 99.99,
//     },
//     {
//         id: 4,
//         title: "Headphones",
//         description: "Wireless over-ear headphones with noise-cancellation.",
//         price: 199.99,
//     },
//     {
//         id: 5,
//         title: "Smart TV",
//         description: "55-inch 4K Smart TV with streaming apps built-in.",
//         price: 699.99,
//     },
// ];

// //   # product arrayindəki producların qiymətləri cəmini və ortalamasını tapın
// let product_cem = 0
// let count = 0
// for (let i = 0; i < products.length; i++) {
//     product_cem += products[i].price
//     count++
// }
// let product_average = product_cem / count
// console.log(`Product-ların qiymətləri cəmi: ${product_cem}`);
// console.log(`Produc-ların ortalaması: ${product_average}`);

// -----------------
// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];
// // "a" ilə başlayıb "a" ilə bitən ölkələri tapmaq
// let aCountries = [];

// for (let i = 0; i < countries.length; i++) {
//     let lowerCaseCountry = countries[i].toLowerCase();
//     let firstChar = lowerCaseCountry[0];
//     let lastChar = lowerCaseCountry[lowerCaseCountry.length - 1];
//     if (firstChar === 'a' && lastChar === 'a') {
//         aCountries.push(countries[i]);
//     }
// }

// console.log(aCountries);
// --------------------------------------
// # Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.
// let bolenler=[]
// function findNumberOfDivisors(n) {
//     let count=0
//   for (let i = 1; i <= n; i++) {
//     if(n%i==0){
//         bolenler.push(i)
//         count++
        

//     }
//   }
//   return bolenler

// }
// console.log(findNumberOfDivisors(36));

// -------------------
// daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin

// function countSpaces(sentence) {
//     let spaceCount = 0;
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] === ' ') {
//             spaceCount++;
//         }
//     }
//     return spaceCount;
// }

// console.log(countSpaces("Namiq Ismayilli"));


