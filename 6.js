/*
4.Masalalar Eng Ko'p Tarqalgan Tillarni Topish:
Mamlakatlar ma'lumotlaridan foydalanib, eng ko'p tarqalgan tillarni topish uchun maxsus funksiya yarating. 
Bu funksiya ikkita parametr qabul qiladi: birinchi parametr sifatida mamlakatlar to'plami (Set),
 ikkinchisi sifatida son qiymati, ya'ni topish kerak bo'lgan
  let countries = new Set([
     { Russian: 9 },
     { English: 91 },
     { French: 45 },
     { Spanish: 24 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Arabic: 25 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
   ])
  // Your output should look like this
  console.log(mostSpokenLanguages(countries, 3))
Result
 [
  {English:91},
  {French:45},
  {Arabic:25}
  ]
*/
function mostSpokenLanguages(set, limit){
  let arr = Array.from(set).map(obj => {let key = Object.keys(obj)[0];return [key, obj[key]]});
  let result = arr.toSorted(function(a, b){return b[1]-a[1]});
  let count = 0
  let res = []
  for(let key of result){
    if(count === limit){
      break
    }
    else{
    res.push(key)
    }
    count += 1
  }
  return res
}
let countries = new Set([
     { Russian: 9 },
     { English: 91 },
     { French: 45 },
     { Spanish: 24 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Arabic: 25 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
   ])
   console.log(mostSpokenLanguages(countries, 3))