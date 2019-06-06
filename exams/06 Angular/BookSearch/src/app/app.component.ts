import { Component } from '@angular/core';
import { Ibook } from './book.model';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookSearch';
  books: Ibook[];
  hasMore: boolean;
  indexNumber: number;
  bookKey: string;

  constructor(private booksService: BooksService) {
    this.books = [];
    this.hasMore = false;
    this.bookKey = '';
    this.indexNumber = 0;
  }

  onSubmit(e, bookKey) {
    e.preventDefault();
    this.resetValues();
    this.bookKey = bookKey;

    this.searchBook(this.bookKey);
  }

  searchBook(bookKey: string) {
    this.booksService.searchBook(bookKey, this.indexNumber).then(data => {
      data.items ? this.setBooks(data.items) : this.disabledLoadMore();    
    }).catch(e=>{
      console.log("e:",e);
    });
  }

  setBooks(data) {
    let currentBooks = data;
    for (let i = 0; i < currentBooks.length; i++) {
      let book = currentBooks[i].volumeInfo;
      this.books.push(book);
    }
    this.indexNumber += 10;
    this.hasMore = true;
  }

  resetValues() {
    this.books = [];
    this.hasMore = false;
    this.bookKey = '';
    //this.indexNumber = 0;
  }

  onLoadMore() {
    this.booksService.searchBook(this.bookKey, this.indexNumber).then(data => {
      data.items ? this.setBooks(data.items) : this.disabledLoadMore();    
    }).catch(e=>{
      console.log("e:",e);
    });
  }

  disabledLoadMore() {
    this.hasMore = false;
  }
}

