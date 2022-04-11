const book = {
  name: "The Witcher: The Last Wish",
  author: "Andrzej Sapkowski",
  published: 1993
}

function bookInfo(book) {
  return `The book: "${book.name}" was written by ${book.author} in the year ${book.published}`
}

console.log(bookInfo(book));
