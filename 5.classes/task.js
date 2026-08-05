class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  get state() {
    return this._state;
  }

  set state(value) {
    if (value < 0) this._state = 0;
    else if (value > 100) this._state = 100;
    else this._state = value;
  }

  fix() {
    this.state *= 1.5;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount);
    this.type = 'book';
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    super(name, releaseDate, pagesCount, author);
    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
      console.log(`Книга "${book.name}" добавлена (состояние: ${book.state})`);
    } else {
      console.log(`Книга "${book.name}" НЕ добавлена – состояние ${book.state} ≤ 30`);
    }
  }

  findBookBy(type, value) {
    return this.books.find(book => book[type] === value) || null;
  }

  giveBookByName(bookName) {
    const index = this.books.findIndex(book => book.name === bookName);
    if (index !== -1) {
      return this.books.splice(index, 1)[0];
    }
    return null;
  }
}

const library = new Library('Городская библиотека');

const magazine = new Magazine('National Geographic', 2023, 80);
magazine.state = 90;

const book = new Book('Анна Каренина', 1877, 864, 'Лев Толстой');
book.state = 70;

const novel = new NovelBook('Преступление и наказание', 1866, 600, 'Фёдор Достоевский');
novel.state = 85;

const fantastic = new FantasticBook('Гарри Поттер и философский камень', 1997, 400, 'Дж.К. Роулинг');
fantastic.state = 95;

const detective = new DetectiveBook('Убийство в Восточном экспрессе', 1934, 320, 'Агата Кристи');
detective.state = 60;

library.addBook(magazine);
library.addBook(book);
library.addBook(novel);
library.addBook(fantastic);
library.addBook(detective);

console.log('Всего книг после добавления:', library.books.length);

let book1919 = library.findBookBy('releaseDate', 1919);
if (!book1919) {
  book1919 = new Book('Тайна старого замка', 1919, 250, 'Неизвестный автор');
  book1919.state = 80;
  library.addBook(book1919);
}

const issued = library.giveBookByName('Преступление и наказание');
if (issued) {
  console.log(`Выдана: "${issued.name}" (${issued.type}), состояние ${issued.state}`);
} else {
  console.log('Книга не найдена');
}

console.log('Осталось книг после выдачи:', library.books.length); 

issued.state = 20;
console.log('Состояние после повреждения:', issued.state);

issued.fix();
console.log('Состояние после восстановления:', issued.state);

library.addBook(issued);

console.log('Итоговое количество книг:', library.books.length);
console.log('Список книг:');
library.books.forEach(b => console.log(`- ${b.name} (${b.type}, ${b.state})`));