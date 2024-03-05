// ### Exercise 1: Mapping and Filtering
// Given an array of objects representing people,
// filter out all people under the age of 30 and then map their names to uppercase.
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const filteredAndMappedNames = people
  .filter((person) => person.age < 30)
  .map((person) => person.name.toUpperCase());

console.log(filteredAndMappedNames);

// ### Exercise 2: Advanced Reducing
// Given an array of transactions, calculate the total balance.
// Each transaction has a `type` ('debit' or 'credit') and an `amount`.
const transactions = [
  { type: "debit", amount: 100 },
  { type: "credit", amount: 50 },
  { type: "debit", amount: 75 },
  { type: "credit", amount: 25 },
];
const totalBalance = transactions.reduce((balance, transaction) => {
  if (transaction.type === "debit") {
    return balance + transaction.amount;
  } else if (transaction.type === "credit") {
    return balance - transaction.amount;
  }
  return balance;
}, 0);

console.log(totalBalance);

// ### Exercise 3: Object Transformation and Filtering
// Given an array of objects representing books, transform each object into
// a new object with only the `title` and `author` properties,
// and filter out books published before the year 2000.
const books = [
  { title: "Book 1", author: "Author 1", year: 1995 },
  { title: "Book 2", author: "Author 2", year: 2005 },
  { title: "Book 3", author: "Author 3", year: 1980 },
  { title: "Book 4", author: "Author 4", year: 2003 },
];
const filteredAndTransformed = books
  .filter((book) => book.year > 2000)
  .map(({ title, author }) => ({ title, author }));

console.log(filteredAndTransformed);

// ### Exercise 4: Parsing and Object Transformation
// Given a JSON string representing an array of people with their name, age, and favorite colors,
// parse the JSON string and transform it into an array of objects with only the name and age properties,
// sorted by age in descending order.
const jsonString =
  '[{"name": "John", "age": 30, "favoriteColor": "blue"}, {"name": "Alice", "age": 25, "favoriteColor": "green"}, {"name": "Bob", "age": 35, "favoriteColor": "red"}]';
const jsonStringParse = JSON.parse(jsonString);
const transformedAndSortedArray = jsonStringParse
  .map(({ name, age }) => ({ name, age }))
  .sort((person1, person2) => person2.age - person1.age);

console.log(transformedAndSortedArray);

// ### Exercise 5: Map
// Given an array of strings, create a Map where the keys are the strings themselves,
// and the values are the lengths of the strings.
const strings = ["apple", "banana", "orange", "strawberry"];
const stringLenghtsMap = new Map();
strings.forEach((str) => {
  stringLenghtsMap.set(str, str.length);
});

console.log(stringLenghtsMap);

// ### Exercise 6: Set
// Given an array of numbers, create a Set containing only unique numbers from the array.
const numbers = [1, 2, 3, 2, 4, 5, 3];
const uniqueNumbersSet = new Set(numbers);

console.log(uniqueNumbersSet);

// ### Exercise 7: Map and Set Combination
// Given an array of objects representing students with their names and grades,
// create a Map where the keys are the student names,
// and the values are Sets containing the grades of each student.
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 90 },
  { name: "Alice", grade: 88 },
  { name: "Charlie", grade: 75 },
];
const studentGradesMap = new Map();
students.forEach(({ name, grade }) => {
  if (studentGradesMap.has(name)) {
    studentGradesMap.get(name).add(grade);
  } else {
    studentGradesMap.set(name, new Set([grade]));
  }
});

console.log(studentGradesMap);

// ## დავალება 8: მონაცემების დამუშავება - ex1.js
const cars = [
  {
    id: 1,
    color: "Red",
    year: 2016,
    make: "Toyota",
    engine: 1.4,
    price: 8000,
  },
  {
    id: 2,
    color: "White",
    year: 2014,
    make: "Mercedes",
    engine: 2.2,
    price: 12500,
  },
  {
    id: 3,
    color: "Black",
    year: 2018,
    make: "Toyota",
    engine: 1.6,
    price: 14300,
  },
  {
    id: 4,
    color: "Silver",
    year: 1990,
    make: "BMW",
    engine: 3.3,
    price: 2200,
  },
  {
    id: 5,
    color: "Green",
    year: 1998,
    make: "Mazda",
    engine: 2.0,
    price: 1800,
  },
  {
    id: 6,
    color: "Yellow",
    year: 2023,
    make: "Ferrari",
    engine: 4.5,
    price: 240000,
  },
  {
    id: 7,
    color: "Blue",
    year: 2019,
    make: "Bugatti",
    engine: 6.0,
    price: 320000,
  },
  {
    id: 8,
    color: "Silver",
    year: 2014,
    make: "Ford",
    engine: 3.5,
    price: 11500,
  },
  {
    id: 9,
    color: "Black",
    year: 2006,
    make: "Mercedes",
    engine: 2.8,
    price: 4500,
  },
  {
    id: 10,
    color: "White",
    year: 2012,
    make: "Toyota",
    engine: 2.4,
    price: 5000,
  },
  {
    id: 11,
    color: "Blue",
    year: 1999,
    make: "Alfa Romeo",
    engine: 3.0,
    price: 2300,
  },
  {
    id: 12,
    color: "Brown",
    year: 2015,
    make: "BMW",
    engine: 2.6,
    price: 13000,
  },
  {
    id: 13,
    color: "Grey",
    year: 2012,
    make: "Rolls Royce",
    engine: 6.0,
    price: 12500,
  },
  {
    id: 14,
    color: "Green",
    year: 2005,
    make: "Subaru",
    engine: 2.2,
    price: 3800,
  },
  {
    id: 15,
    color: "Yellow",
    year: 2021,
    make: "Opel",
    engine: 1.8,
    price: 6500,
  },
  {
    id: 16,
    color: "Black",
    year: 2003,
    make: "Mercedes",
    engine: 2.4,
    price: 3400,
  },
  {
    id: 17,
    color: "Red",
    year: 1995,
    make: "BMW",
    engine: 1.6,
    price: 1400,
  },
  {
    id: 18,
    color: "Silver",
    year: 2013,
    make: "Toyota",
    engine: 2.5,
    price: 6300,
  },
  {
    id: 19,
    color: "White",
    year: 2008,
    make: "Hyundai",
    engine: 2.8,
    price: 5300,
  },
  {
    id: 20,
    color: "Black",
    year: 2012,
    make: "BMW",
    engine: 4.4,
    price: 4800,
  },
  {
    id: 21,
    color: "Red",
    year: 2020,
    make: "Jeep",
    engine: 3.2,
    price: 32000,
  },
  {
    id: 22,
    color: "Green",
    year: 2018,
    make: "Smart",
    engine: 1.2,
    price: 11000,
  },
  {
    id: 23,
    color: "Grey",
    year: 2022,
    make: "Ford",
    engine: 4.8,
    price: 27500,
  },
  {
    id: 24,
    color: "Silver",
    year: 1998,
    make: "Mercedes",
    engine: 4.0,
    price: 2200,
  },
  {
    id: 25,
    color: "Yellow",
    year: 2007,
    make: "Subaru",
    engine: 2.4,
    price: 3300,
  },
];
// დავალება 8-1: მოცემულია მასივი რომელშიც მოთავსებულია ობიექტები, საჭიროა დაიწეროს ფუნქცია,
// რომელიც დააბრუნებს მასივში არსებული მანქანების საშუალო ფასს(`price`) - `averagePrice`

function calculateAveragePrice(carArray) {
  if (carArray.length === 0) {
    return 0;
  }
  const totalPrice = carArray.reduce((sum, car) => sum + car.price, 0);
  const averagePrice = totalPrice / cars.length;
  return averagePrice;
}
const averagePrice = calculateAveragePrice(cars);
console.log(averagePrice);

// დავალება 8-2: დაიწეროს ფუნქცია, რომელიც დააბრუნებს მასივს რომელშიც მხოლოდ ის მანქანები იქნება,
// რომელთა ფასიც არის 10000-ზე ნაკლები(`price`) - `lessThen10000`
const lessThen10000 = cars
  .filter((car) => car.price < 10000)
  .map(({ make, price }) => ({ make, price }));

console.log(lessThen10000);

// დავალება 8-3: დაიწეროს ფუნქცია, რომელიც დააბრუნებს მასივს რომელშიც იქნება ყველა მანქანა
// გამოშვებული 2010 წლის შემდეგ(`year`) - `producedAfter2010`
const producedAfter2010 = cars
  .filter((car) => car.year > 2010)
  .map(({ make, year }) => ({ make, year }));

console.log(producedAfter2010);

// დავალება 8-4: დაიწეროს ფუნქცია, რომელიც დააბრუნებს მასივს რომელშიც იქნება
// ყველა მანქანა გამოშვებული 2000-2010 წლების შუალედში შემდეგ(`year`) - `producedBetween20002010`
const producedBetween20002010 = cars
  .filter((car) => car.year > 2000 && car.year < 2010)
  .map(({ make, year }) => ({ make, year }));

console.log(producedBetween20002010);

// დავალება 8-5: დაიწეროს ფუნქცია, რომელიც დააბრუნებს **ობეიქტს** თუ რამდენი
// ავტომობილის ძრავი არის 2.0 ან მეტი და რამდენი 2.0-ზე ნაკლები - `engineRange`
function engineRange(carArray) {
  const engineCounts = {
    moreThen2: 0,
    lessThen2: 0,
  };
  carArray.forEach((car) => {
    if (car.engine >= 2) {
      engineCounts.moreThen2 += 1;
    } else {
      engineCounts.lessThen2 += 1;
    }
  });
  return engineCounts;
}
const engineCounts = engineRange(cars);

console.log(engineCounts);
