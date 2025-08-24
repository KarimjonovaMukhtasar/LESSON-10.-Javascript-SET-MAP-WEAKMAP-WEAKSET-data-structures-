/*
5. Masala Vazifa: Kitoblar Tizimini Boshqarish
Maqsad:
createBookCollection obyekti yordamida kitoblar to'plamini boshqarish tizimini yarating. Bu tizim quyidagi imkoniyatlarga ega bo'lishi kerak:
Yangi kitob qo'shish
Ma'lum bir kitobni ID orqali qidirish
Barcha kitoblarni ko'rish
Muallif nomi bo'yicha kitoblarni saralash
O'qilgan kitoblarni ko'rish
Ma'lum bir kitobni o'chirish
Barcha kitoblarni o'chirish
Vazifa Tavsifi:
Yangi Kitob Qo'shish (create): Yangi kitobni books ro'yxatiga qo'shadi. Har bir kitob uchun takrorlanmas id yaratiladi.
{
  title: 'The Hobbit',
  author: 'J.R.R. Tolkien',
  read: false
}
Kitobni Qidirish (findOne): Berilgan id orqali kitobni topib, uni qaytaradi.
Barcha Kitoblarni Ko'rish (findAll): Tizimdagi barcha kitoblarni qaytaradi.
Muallif Bo'yicha Saralash (filterByAuthor): Berilgan muallif nomi bo'yicha barcha tegishli kitoblarni qaytaradi.
O'qilgan Kitoblarni Ko'rish (filterByreaded): read xususiyati true bo'lgan barcha kitoblarni qaytaradi.
Kitobni O'chirish (deleteOne): Berilgan id orqali kitobni topib, uni ro'yxatdan o'chiradi.
Barcha Kitoblarni O'chirish (deleteMany): Tizimdagi barcha kitoblarni o'chiradi.
*/
const createBookCollection = {
   booklist: [],
   create(book) {
    this.booklist.push(book)
   },
   findOne(id) {
    let found = false
    for(let key of this.booklist){
      if(key.id === id){
        found = true
        return this.booklist.key
      }
    }
    if(found === false){
      return `Not Found such an id`
    }
   },
   findAll() {
    return this.booklist
   }, 
   filterByAuthor(authorname) {
    let found = false
    let res  = []
    for(let key of this.booklist){
      if(key.author.includes(authorname)){
        found = true
        res.push(key)
      }
    }
    if(found === false){
      return `Not Found such an author`
    }
    else{
      return res
    }
   },
   filterByread() {
    let read = []
    let check = false
    for(let key of this.booklist){
      if(key.read === true){
        read.push(key)
        check = true
      }
    }
    if(check === false){
      return `SO FAR NO BOOKS ARE READ`
    }
    else{
      return read
    }
   },
   deleteOne(id) {
     let found = false
    for(let i = 0; i < this.booklist.length; i++){
      if(this.booklist[i].id === id){
        found = true
        this.booklist.splice(i, 1)
        return `${id} numbered book has been deleted!`
      }
    }
    if(found === false){
      return `Not Found such an id`
    }
   },
   deleteMany() {
    this.booklist = []
    return `ALL BOOKS ARE DELETED SUCCESSFULLY`
   },
}
// Add some books
createBookCollection.create({id: 1, title: "Book A", author: "Alice", read: true})
createBookCollection.create({id: 2, title: "Book B", author: "Bob", read: false})
createBookCollection.create({id: 3, title: "Book C", author: "Alice", read: true})
console.log(createBookCollection.findAll())
console.log(createBookCollection.findOne(2))
console.log(createBookCollection.filterByAuthor("Alice"))
console.log(createBookCollection.filterByread())
console.log(createBookCollection.deleteOne(2))
console.log(createBookCollection.deleteMany())

