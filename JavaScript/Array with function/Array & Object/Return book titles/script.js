// Create a function that returns an array of book titles from an array of book objects.

function getBookTitle(book){
    let titles = [];

    for(let i = 0; i<book.length; i++){
        titles.push(book[i].title);
    }
    return titles;
    // return pags ;
}

const book = [
    {title : "Harry Potter", pages : 350},
    { title : "Atomic Habits", pages : 650},
    {title : "THe Alchemist ", pages : 237},
];

console.log(getBookTitle(book));

