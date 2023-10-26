// 1
class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = null;
    }
  
    fix() {
      this._state *= 1.5;
      if (this._state < 0) {
        return this._state = 0;
      }
      if (this._state > 100) {
        return this._state = 100;
      }
      return this._state;
    }
  
    set state(number) {
      if (number < 0) {
        return this._state = 0;
      }
      if (number > 100) {
        return this._state = 100;
      }
     return this._state = number;
    }
  
    get state() {
      return this._state;
    }
  }

  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "book";
      this.author = author;
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }


  // 2
  class Library extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.books = [];
    }
  
    addBook(book) {
      if (this.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      let findB = this.books.find(element => element[type] === value);
      if (findB) {
        return findB;
      }
      return null;
    }
  
    giveBookByName(bookName) {
      let findBook = this.findBookBy("name", bookName);
      if (findBook) {
        for (var i = 0; i < this.books.length; i++) {
          if(this.books[i].name === bookName) {
            this.books.splice(i,1);
          } 
        }
        return findBook;
      }
      return null;
    }
  
  }