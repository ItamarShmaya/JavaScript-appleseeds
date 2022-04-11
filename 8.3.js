const book = {
  name: "The Witcher: The Last Wish",
  author: "Andrzej Sapkowski",
  published: 1993
}

const book2 = {
  name: "The Alchemist",
  author: "Paulo Coelho",
  published: 1988
}

const bookUtils = {
  getFirstPublished(book, book2) {
    return (book.published >= book2.published) ? book2.published : book.published;
  },
  setNewEdition(book, edition) {
    book.latestEdition = edition;
  },
  setLanguage(book, lang) {
    book.language = lang;
  },
  setTranslation(book, translatorName, lang) {
    book.translation = {translator: translatorName, language: lang};
  },
  setPublisher(book, pubName, pubLocation) {
    book.publisher = {name: pubName, location: pubLocation}
  },
  isSamePublisher(book, book2) {
    let samePublisher = false;
    let sameLocation = false;
    (book.publisher.name === book2.publisher.name) ? samePublisher = true : samePublisher = false;
    (book.publisher.location === book2.publisher.location) ? sameLocation = true : sameLocation = false;
    return (samePublisher && sameLocation) ? true : false;
  }
};

console.log(book);

bookUtils.setLanguage(book, "polish");
bookUtils.setTranslation(book, "someone", "english");
bookUtils.setPublisher(book, "someoneelse", "somwhere");

console.log(book);

bookUtils.setLanguage(book2, "asdas");
bookUtils.setTranslation(book2, "asdas", "asdas");
bookUtils.setPublisher(book2, "asdas", "asda");

console.log(bookUtils.isSamePublisher(book, book2));
