/*
Albatta Map dan foydalanish shart!
8. Masala, Sizning Ismingiz Qanchalik Yaxshi?
Ism qabul qilib, berilgan ismning qanchalik yaxshi ekanligini tekshiradigan funksiya yarating. Harflar uchun ballar lug'ati oldindan yuklangan va Kod tabida mavjud. Ismingizdagi harflarning ballarini qo'shib, jami ballni oling.
const scores = new Set([
  ["A", 100],
  ["B", 14],
  ["C", 9],
  ["D", 28],
  ["E", 145],
  ["F", 12],
  ["G", 3],
  ["H", 10],
  ["I", 200],
  ["J", 100],
  ["K", 114],
  ["L", 100],
  ["M", 25],
  ["N", 450],
  ["O", 80],
  ["P", 2],
  ["Q", 12],
  ["R", 400],
  ["S", 113],
  ["T", 405],
  ["U", 11],
  ["V", 10],
  ["W", 10],
  ["X", 3],
  ["Y", 210],
  ["Z", 23],
])
Natijangizni quyidagi qoidalar asosida qaytaring:
ball <= 60: "NOT TOO GOOD"
61 <= ball <= 300: "PRETTY GOOD"
301 <= ball <= 599: "VERY GOOD"
ball >= 600: "THE BEST"
Misol:
nameScore("MUBASHIR") ➞ "THE BEST"
nameScore("YOU") ➞ "VERY GOOD"
nameScore("MATT") ➞ "THE BEST"
nameScore("PUBG") ➞ "NOT TOO GOOD"
*/
function nameScore(str){
  const scores = new Map([
  ["A", 100],
  ["B", 14],
  ["C", 9],
  ["D", 28],
  ["E", 145],
  ["F", 12],
  ["G", 3],
  ["H", 10],
  ["I", 200],
  ["J", 100],
  ["K", 114],
  ["L", 100],
  ["M", 25],
  ["N", 450],
  ["O", 80],
  ["P", 2],
  ["Q", 12],
  ["R", 400],
  ["S", 113],
  ["T", 405],
  ["U", 11],
  ["V", 10],
  ["W", 10],
  ["X", 3],
  ["Y", 210],
  ["Z", 23],
]);
  let map = new Map()
  let sum = 0
  for(let key of str){
    map.set(key, scores.get(key))
    sum += scores.get(key)
  }
  if(sum <= 60){
    return `NOT TOO GOOD`
  }
  else if(sum >= 61 && sum <= 300){
    return `PRETTY GOOD`
  }
  else if(sum >= 301 && sum <= 599){
    return `VERY GOOD`
  }
  else if(sum >= 600){
    return `THE BEST`
  }
}
console.log(nameScore("MUBASHIR"))
console.log(nameScore("YOU"))
console.log(nameScore("MATT"))
console.log(nameScore("PUBG"))

