/*
Albatta Map dan foydalanish shart!
7. Masala, O'g'irlangan Buyumlar Ro'yxatidan Biror Narsani Olib Tashlash
Vazifa Tavsifi:
Sizning turmush o'rtog'ingiz sizga ro'yxatdagi buyumlardan biri o'g'irlanmaganini, balki Transilvaniyadagi qasringizda ekanligini aytadi. O'g'irlangan buyumlar obyekti va bir buyum nomi berilganida, ushbu buyumsiz ro'yxatning nusxasini qaytaring.
Misollar:
plaintext
removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate") ➞ { piano: 300, tv: 100 }
removeEntry({ mirror: 500, painting: 1 }, "mirror") ➞ { painting: 1 }
*/
function removeEntry(obj, entry){
    let newMap = new Map(Object.entries(obj))
    let result = new Map()
    for(let [key] of newMap){
        if(key === entry){
            newMap.delete(key)
        }
    }
    return newMap
}
console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate"))
console.log(removeEntry({ mirror: 500, painting: 1 }, "mirror"))
