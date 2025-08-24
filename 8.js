/*
Albatta Map dan foydalanish shart!
6. Masala
Funksiyani E'lon Qilish: afterNYears nomli funksiya yaratishingiz kerak. Bu funksiya ikkita argument qabul qiladi:
people: Bu argument odamlar va ularning hozirgi yoshlarini o'z ichiga olgan obyekt.
n: Necha yil o'tishi kerakligini ko'rsatuvchi son.
Yoshni Hisoblash: Funksiya har bir odamning yoshini n yil o'tgach qancha bo'lishini hisoblashi kerak. Agar n manfiy son bo'lsa, uning mutlaq qiymati ishlatiladi.
Natijani Qaytarish: Funksiya yangilangan yoshlarni o'z ichiga olgan yangi obyektni qaytarishi kerak.
Natija
// Misollar
console.log(afterNYears({
  "Joel" : 32,
  "Fred" : 44,
  "Reginald" : 65,
  "Susan" : 33,
  "Julian" : 13
}, 1));
// Natija: { "Joel" : 33, "Fred" : 45, "Reginald" : 66, "Susan" : 34, "Julian" : 14 }
console.log(afterNYears({
  "Baby" : 2,
  "Child" : 8,
  "Teenager" : 15,
  "Adult" : 25,
  "Elderly" : 71
}, 19));
// Natija: { "Baby" : 21, "Child" : 27, "Teenager" : 34, "Adult" : 44, "Elderly" : 90 }
console.log(afterNYears({
  "Genie" : 1000,
  "Joe" : 40
}, 5));
// Natija: { "Genie" : 1005, "Joe" : 45 }
*/
function afterNYears(obj, num){
  num = Math.abs(num)
  let newMap = new Map(Object.entries(obj))
  let result = new Map()
  for(let [key,value] of newMap){
    result.set(key, value + num)
  }
  console.log(result)
}
console.log(afterNYears({
  "Joel" : 32,
  "Fred" : 44,
  "Reginald" : 65,
  "Susan" : 33,
  "Julian" : 13
}, 1));
console.log(afterNYears({
  "Baby" : 2,
  "Child" : 8,
  "Teenager" : 15,
  "Adult" : 25,
  "Elderly" : 71
}, 19));
console.log(afterNYears({
  "Genie" : 1000,
  "Joe" : 40
}, 5));