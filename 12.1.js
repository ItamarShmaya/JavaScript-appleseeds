var library = [
  {
  author: "Bill Gates",
  title: "The Road Ahead",
  readingStatus: true
  },
  {
  author: "Steve Jobs",
  title: "Walter Isaacson",
  readingStatus: true
  },
  {
  author: "Suzanne Collins",
  title: "Mockingjay: The Final Book of The Hunger Games",
  readingStatus: false
  }
  ];

  function canRead(arr) {
    const readable = [];
    library.forEach(book => (book.readingStatus) ? readable.push(book) : null)
    return readable
  }
  
  console.log(canRead(library));