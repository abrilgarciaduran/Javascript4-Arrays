const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
    'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
    'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
    'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
    'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
    'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
    'Blair, Tony', 'Blake, William'];



// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const milQuinientos = inventors.filter(inventor => {
    if (inventor.year >= 1500 && inventor.year < 1600) {
        return true
    }
})
console.log('This inventors were born in the 1500s')
console.table(milQuinientos)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullName = inventors.map(inventor => {
    return (inventor.first + " " + inventor.last)
})
console.log('This are the inventors full names')
console.table(fullName)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1)
console.log('Here are the inventors ordered oldest to youngest')
console.table(ordered)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
let allLivedYears1 = 0; //without reduce
for (var i = 0; i < inventors.length; i++) {
    let years = inventors[i].passed - inventors[i].year;
    allLivedYears1 += years
}


const allLivedYears2 = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(`Entre todos han vivido ${allLivedYears2} años`)


// 5. Sort the inventors by years lived
const sortedByYearsLived = inventors.sort((a, b) => {
    const aYear = a.passed - a.year;
    const bYears = b.passed - b.year;
    return aYear > bYears ? -1 : 1;
});
console.log('Ordenados desde el que mas años vivio hasta que menos años vivio')
console.log(sortedByYearsLived)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// Written while inspecting this page https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const boulevards = links
//     .map(link => link.textContent)
//     .filter(streatName => streatName.includes('de'))

// 7. sort Exercise
// Sort the people alphabetically by last name
const alfabeticamente = people.sort((a, b) => {
    const [aLast, aFirst] = a.split(', ');
    const [bLast, bFirst] = b.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log("Aqui están las personas ordenadas alfabeticamente: " + alfabeticamente);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportes = data.reduce(function (counting, item) {
    if (!counting[item]) { //Si aun no esta, lo agrega
        counting[item] = 0;
    }
    counting[item]++; //Si esta, le suma uno
    return counting;
}, {});

console.log("En el array de transportes hay: ");
console.log(transportes)


// 9. Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const atLeastOneAdult = people.some(function (person) {
    const actualYear = (new Date()).getFullYear();
    return actualYear - person.year >= 19
})
console.log('Working with...')
console.table(people)
console.log(`Are there any adults? ${atLeastOneAdult}`)

// 10. Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every(function (person) {
    const actualYear = (new Date()).getFullYear()
    return actualYear - person.year >= 19
})
console.log(`Are them all adults? ${allAdults}`)

// 11. Array.prototype.find()
// find the comment with the ID of 823423
const comment = comments.find(comment => (comment.id == 823423))
console.log('Working with...')
console.table(comments)
console.log(`The comment with ID = 823423 is`)
console.log(comment)

// 12. Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex(comment => (comment.id == 823423))
const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
]

// 13. Deleting by id (creates a new array without the comment with the given id)
console.log('You can delete a comment with deleteCommentById(id)')
function deleteCommentById(id) {
    const index = comments.findIndex(comment => (comment.id == id))
    console.log(index)
    const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
    ]
    console.table(newComments)
}