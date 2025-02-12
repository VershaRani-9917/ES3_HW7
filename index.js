// 1. Create an object using shorthand property values
const createPerson = (name, age) => ({ name, age });

console.log(createPerson("Alice", 25));
console.log(createPerson("Bob", 30));

// 2. Create an object with default values using shorthand property values
const createFruit = (name = "Apple", color = "Red") => ({ name, color });

console.log(createFruit());
console.log(createFruit("Banana", "Yellow"));

// 3. Create an object using shorthand property values
const createBookObj = (title, author, genre) => ({ title, author, genre });

console.log(
  createBookObj("The Great Gatsby", "F. Scott Fitzgerald", "Classic")
);
console.log(createBookObj("The Beatles Anthology", "The Beatles", "Music"));

// 4. Create an object with default values using shorthand property values
const createBook = (
  bookName = "The Hitchhiker's Guide to the Galaxy",
  author = "Douglas Adams"
) => ({ bookName, author });

console.log(createBook());
console.log(createBook("A Suitable Boy", "Vikram Seth"));

// 5. Create an object using shorthand property values
let aaloo = 1;
let bhaaloo = 2;
console.log({ aaloo, bhaaloo });

// 6. Create an object representing a rectangle with area
const calculateArea = (length, width) => ({
  length,
  width,
  area: length * width,
});

console.log(calculateArea(5, 8));

// 7. Create an object with two arrays using shorthand property values
const printObjOfArrays = (arr1, arr2) => ({ arr1, arr2 });

console.log(printObjOfArrays([1, 2, 3], ["a", "b"]));

// 8. Create an object representing a triangle with perimeter
const createTriangle = (side1, side2, side3) => ({
  side1,
  side2,
  side3,
  perimeter: side1 + side2 + side3,
});

console.log(createTriangle(3, 4, 5));

// 9. Create an object representing a 2D point
const createPoint = (x, y) => ({ x, y });

console.log(createPoint(3, 7));

// 10. Create an object representing an email address
const createEmail = (username, domain) => ({
  username,
  domain,
  fullAddress: `${username}@${domain}`,
});

console.log(createEmail("john.doe", "example.com"));
