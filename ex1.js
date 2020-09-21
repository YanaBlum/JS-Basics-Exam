const books = {
  theOutsider: {
    author: 'Stephen King',
    pages: 541
  },
  harryPotter: {
    author: 'J.K. Rowling',
    pages: 359
  },
  greatGatsby: {
    author: 'Scott Fitzgerald',
    pages: 741
  }
}


const getBookInfo = function () {
  const bookName = prompt('Enter a book name...')
  if(bookName in books){
console.log("The number of pages for the " + bookName + " book is " + books[bookName].pages + " pages.")
  }
if(bookName in books){
  console.log("The author of the " + bookName + " book is "+ books[bookName].author)
}

}

getBookInfo()