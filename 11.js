/*
Bonus
G'olib Kim?
Siz va turmush o'rtog'ingiz o'rtasidagi jang tugadi. Jang qanday o'tganligi haqidagi tasavvuringizga asoslanib, kim g'olib chiqqanini aniqlang.
Uch raunddan iborat obyekt beriladi, har bir raund uchun sizning ochkolariniz ichki obyektlar sifatida keltirilgan. Eng ko'p raundlarda g'olib chiqqan shaxsni hisoblab, g'olibni aniqlang. Raundning g'olibi shu raundda eng ko'p ochko olgan shaxs hisoblanadi. Raundlarda ham, yakuniy natijada ham durang natijalar mumkin.
Agar siz turmush o'rtog'ingizdan ko'proq raundlarda g'olib chiqqan bo'lsangiz, "MEN!" deb qaytaring.
Agar turmush o'rtog'ingiz ko'proq raundlarda g'olib chiqqan bo'lsa, "TURMUSH O'RTOG'IM!" deb qaytaring.
Agar durang bo'lsa, "HECH KIM!" deb qaytaring.
Misol:
javascript
let map1 = new Map([
  ["round1", { me: 10, spouse: 5, }],
  ["round2", { me: 5, spouse: 20, }],
  ["round3", { me: 10, spouse: 10, }],
])
let map2 = new Map([
  ["round1", { me: 40, spouse: 5, }],
  ["round2", { me: 9, spouse: 10, }],
  ["round3", { me: 9, spouse: 10, }],
])
determineWinnerOfFight(map1) // ➞ "HECH KIM!"
determineWinnerOfFight(map2) // ➞ "TURMUSH O'RTOG'IM!"
*/
function determineWinnerOfFight(map){
  let I = 0
  let Spouse = 0
  let Equal = 0
  for(let [round, key] of map){
    if(key.me > key.spouse){
      I += 1
    }
    else if(key.me < key.spouse){
      Spouse += 1
    }
    else{
      Equal += 1
    }
  }
  if(I > Spouse){
    return `MEN!`
  }
  else if(Spouse > I){
    return `TURMUSH O'RTOG'IM!`
  }
  else{
    return `DURRANG!`
  }
}
let map1 = new Map([
  ["round1", { me: 10, spouse: 5, }],
  ["round2", { me: 5, spouse: 20, }],
  ["round3", { me: 10, spouse: 10, }],
])
let map2 = new Map([
  ["round1", { me: 40, spouse: 5, }],
  ["round2", { me: 9, spouse: 10, }],
  ["round3", { me: 9, spouse: 10, }],
])
console.log(determineWinnerOfFight(map1))
console.log(determineWinnerOfFight(map2))