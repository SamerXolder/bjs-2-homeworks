class PrintEditionItem {
    constructor(name,releaseDate,pagesCount,state,type)
    {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
        }
    fix(){
        return this.state *= 1.5;    
}
       set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state(){
        return this._state;
    }
}

class Library {
    constructor (name, books){
        this.name = name;
        this.books = [];
    }

    addBook(book){

        if (book.state > 30){
            this.books.push(book);
        }

    }

    findBookBy (type, value){
        const found = this.books.find(book => book[type] === value);
        return found || null;
    }
}

const myLibrary = new Library('Городская библиотека');
console.log('Библиотека создана:', myLibrary.name);

const book1 = new PrintEditionItem('Война и мир', 1869, 1300);
book1.state = 80;

const book2 = new PrintEditionItem('Мастер и Маргарита', 1967, 450);
book2.state = 50;

myLibrary.addBook(book1);
myLibrary.addBook(book2);

let book1919 = myLibrary.findBookBy('releaseDate', 1919);
if (!book1919) {
    console.log('Книга 1919 года не найдена – создаём новую.');
    book1919 = new PrintEditionItem('Загадочная история', 1919, 300);
    book1919.state = 90;
    myLibrary.addBook(book1919);
} else {
    console.log('Книга 1919 года найдена:', book1919.name);
}

const issuedBook = myLibrary.books[0];
console.log(`Выдана книга: "${issuedBook.name}" (состояние: ${issuedBook.state})`);

issuedBook.state = 20;
console.log(`Книга повреждена. Новое состояние: ${issuedBook.state}`);

issuedBook.fix();
console.log(`Книга восстановлена. Состояние после fix: ${issuedBook.state}`);

myLibrary.addBook(issuedBook);

console.log('\nСписок книг в библиотеке после всех операций:');
myLibrary.books.forEach((book, index) => {
    console.log(`${index+1}. "${book.name}" (${book.releaseDate}), состояние: ${book.state}`);
});


class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }

  addMark(subject, mark) {
    if (mark < 2 || mark > 5) {
      console.warn(`Оценка ${mark} не добавлена – допустимы только 2, 3, 4, 5`);
      return;
    }

    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  // Средняя оценка по одному предмету
  getAverageBySubject(subject) {
    const marksArray = this.marks[subject];
    if (!marksArray || marksArray.length === 0) {
      return 0;
    }

    const sum = marksArray.reduce((acc, mark) => acc + mark, 0);
    return sum / marksArray.length;
  }


  getAverage() {
    const subjects = Object.keys(this.marks);
    // Если нет ни одного предмета – возвращаем 0
    if (subjects.length === 0) {
      return 0;
    }

    const totalAverage = subjects.reduce((acc, subject) => {
      return acc + this.getAverageBySubject(subject);
    }, 0);

    return totalAverage / subjects.length;
  }
}