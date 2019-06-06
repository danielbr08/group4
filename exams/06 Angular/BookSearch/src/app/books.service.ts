import { Injectable } from '@angular/core';
import { Ibook } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl: string;
  searchUrl: string;
  detaiulsUrl: string;
  apiKey: string;

  constructor() { 
    this.apiKey = 'AIzaSyDKKb0AjOM-UpM45JXEucq3StNYSGeLom4';
    this.baseUrl = `https://www.googleapis.com/books/v1/volumes?key=${this.apiKey}`;
    this.searchUrl = '';
  }

  setSearchUrl(bookKey: string, indexNumber: number){
    this.searchUrl = `${this.baseUrl}&q=${bookKey}&startIndex=${indexNumber}`;
  }

  searchBook(bookKey: string, indexNumber: number){
    this.setSearchUrl(bookKey,indexNumber);
    return fetch(this.searchUrl).then(stream=>stream.json());
  }
}