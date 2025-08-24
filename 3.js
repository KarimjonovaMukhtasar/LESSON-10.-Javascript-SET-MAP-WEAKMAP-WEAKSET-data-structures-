/*
1. Masala
Function yarating u string qiymatni qabul qilsin ya'ni pastdagi inputni va natijani result kabi qaytarsin
Har bir so'zni alohida qaytaring.
Agar so'z uzunligi 3 yoki undan ko'p bo'lsa, so'zni birinchi harfi, keyin so'zning uzunligi minus ikki (chunki birinchi harf va oxirgi harfdan tashqari barcha harflar hisobga olinadi), va nihoyat so'zning oxirgi harfi bilan almashtirish kerak.
Agar so'z uzunligi 2 yoki undan kam bo'lsa, so'z o'zgarishsiz qoladi.
Example
Every = E3y bu degani So'zni Birinchi harifi va ohirgisidan bitta oldingi harfgacha uzunligi va ohirgi harf
"Nodejs" => N4j
"Toshkent" => T6t
const input = "Every developer likes to mix kubernetes and javascript";
const result = "E3y d7r l3s to mix k8s and j8t";
*/
function hideword(str){
    let arr = str.split(" ").map(item => item.trim())
    let res = []
    for(let key of arr){    
        if(key.length <= 2){
            res.push(key)
        }
        else if(key.length >= 3){
            let portion = key[0] + (key.length - 2) + key[key.length - 1];
            res.push(portion)
        }
    }
    return res.join(" ")
}
let input = prompt("Matnni kiriting")
alert(hideword(input))
