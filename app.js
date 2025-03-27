// class Car {
//   constructor(marka, model, year, engine) {
//     this.marka = marka;
//     this.model = model;
//     this.year = year;
//     this.engine = engine;
//   }
// }

// let car1 = new Car("Tesla", "Model Y", 2024, "1.5T")
// let car2 = new Car("Mercedes", "CLS 63", 2014, "5.5TT")
// let car3 = new Car("Changan", "Qyuan A07", 2024, "1.7")
// console.log(car1);
// console.log(car2);
// console.log(car3);


// const user1 = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496"
//     }
//   }
// }

// user2 = {
//   id: 1,
//   name: "Ally",
//   username: "Asad",
//   email: "asadzally@april.biz",
//   address: {
//     street: "Govsan",
//     suite: "Apt.111",
//     city: "Baku",
//     zipcode: "1111-1111",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496"
//     }
//   }
// }

// Object.assign(user1, { name: "Ramin" })
// console.log(user1);
// Object.assign(user2, { username: "CodeFather" })
// console.log(user2);

// object.assign() methodunu istifadə etmək üçün iki obyekt yaradilir  object.assign() methodu yazilir ve daxilinde 1ci hansi obyektə hansı obyekt mənimsədiləcək deyə qeyd edilir ve yaxudda  object.assign() methodu yazilir birinci hansi obyeky dəyişiləcəksə o ondan sonra obyekt strukturu qurulu ve ne deyismek isteyirse deyisilir

// Spread və rest operatorları funksiyalarda,arraylərdə və obyektlərdə istifadə olunur.ikisinin sturukturu ...obj şəklindədir.Spread operatoru yeni obyekt yaratmağ üçün və ya birləşdirmək üçün istifadə olunur.rest operatoru isə obyektlərdə arraylərdə qalan hissəni əldə etmək üçün istifadə olunur

// let obj1 = { a: 1, b: 2 }
// let obj2 = { ...obj1, c: 3 }
// console.log(obj2);
// //bu spread operatoru
// let obb = { a: 1, b: 2, c: 3, d: 4 }
// let { a, ...qalanobyekt } = obb;
// console.log(a);
// console.log(qalanobyekt);
// //buda rest operatoru


// function propertyTaker(obj, proprtyName) {
//   console.log(obj[proprtyName]);


// }
// propertyTaker({ continent: 'Asia', country: 'Japan' }, 'continent') // 'Asia'
// propertyTaker({ country: 'Sweden', continent: 'Europe' }, 'country') // 'Sweden'
// propertyTaker({ name: 'roma', age: 12 }, 'name') // 'roma'



// Stack: "Yığdığın hər şey ardıcıl olaraq silinir."
// Heap: "Daha böyük şeylər saxlanır, amma hər şey sərbəst şəkildə yerləşir."

// function existsAndTruthy(obj, propertyName) {

//   console.log(obj[propertyName] ? true : false);



// }

// existsAndTruthy({ a: 1, b: 2, c: 3 }, 'b') // true
// existsAndTruthy({ x: 'a', y: null, z: 'c' }, 'y') // false
// existsAndTruthy({ x: 'a', b: 'b', z: undefined }, 'z') // false 