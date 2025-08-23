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