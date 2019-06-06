import { Component, OnInit, Input } from '@angular/core';
import { Ibook } from '../book.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
@Input() book: Ibook;
authors: string;

thumbnail: string;
publisher: string;
publishedDate: string;
description: string;

isTitleClicked: boolean;

  constructor(private booksService: BooksService) { 
    this.isTitleClicked = false;
  }

  ngOnInit() {
    this.authors = this.book.authors ? this.book.authors.join(',') : "No Author!";
    this.thumbnail = '';
    this.publisher = '';
    this.publishedDate = '';    
    this.description = '';
    
  }

  onTitleClicked(){
    this.isTitleClicked = true;    
    this.publisher = this.book.publisher;
    this.publishedDate = this.book.publishedDate;
    this.description = this.book.description;    
    this.thumbnail = this.book.imageLinks.thumbnail;
  }

}

