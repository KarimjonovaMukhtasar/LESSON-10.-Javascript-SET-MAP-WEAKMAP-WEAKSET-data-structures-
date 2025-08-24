/*
3. Masala
Yaratiladigan funksiya employees setini parametr sifatida qabul qiladi. Bu setda har bir xodim haqida ma'lumotlar mavjud bo'lib, ularning ismi, maoshi va departamenti keltirilgan.
Agar employees seti bo'sh bo'lsa, funksiya xatolik xabarini qaytarishi kerak.
Sizning vazifangiz HR va IT departamentlarida ishlaydigan xodimlarning maoshlarini hisoblashdan iborat.
Hisoblangan maoshlar yig'indisidan keyin, qaysi departamentda maoshlar o'rtacha ko'proq bo'lsa, o'sha departament haqidagi ma'lumotlarni qaytaring. Natijada faqat eng yuqori o'rtacha maoshga ega departament haqidagi ma'lumotlar bo'lishi kerak.
Input
const employees = new Set([
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
])
Result
[
  { department: 'HR', average: 71666 }
]
*/
function maxdepartment(set){
  let itsum = 0
  let itcount = 0
  let hrsum = 0
  let hrcount = 0
  for(let key of set){
    if(key.department === "IT"){
      itsum = itsum + key.salary
      itcount = itcount + 1
    }
    else{
      hrsum = hrsum + key.salary
      hrcount = hrcount + 1
    }
  }
  let itres = itsum/itcount
  let hrres = hrsum/hrcount
  if(itres > hrres){
    return `department: "IT", average: ${Math.floor(itres)}`
  }
  else{
      return `department: "HR", average: ${Math.floor(hrres)}`

  }
}
const employees = new Set([
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
])
alert(maxdepartment(employees))
