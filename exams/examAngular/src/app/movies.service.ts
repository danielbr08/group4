import { Injectable } from '@angular/core';
import { Imovie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string;
  searchUrl: string;
  detaiulsUrl: string;
  apiKey: string;


  constructor() { 
    this.apiKey = 'd777cf78';
    this.baseUrl = `http://www.omdbapi.com/?apikey=${this.apiKey}`;
    this.searchUrl = '';
    this.detaiulsUrl = '';
  }

  setSearchUrl(keyWord: string, pageNumber: number){
    this.searchUrl = `${this.baseUrl}&s=${keyWord}&type=movie&page=${pageNumber}`;
  }

  setDetailsUrl(imdbId: string){
    this.detaiulsUrl = `${this.baseUrl}&i=${imdbId}`;
  }

  // getSearchUrl(){
  //   return this.searchUrl;
  // }

  // getDetaiulsUrl(){
  //   return this.detaiulsUrl;
  // }

  searchMovie(keyWord: string, pageNumber: number){
    console.log("service: ",keyWord);
    this.setSearchUrl(keyWord,pageNumber);
    console.log(this.searchUrl,pageNumber);
    return fetch(this.searchUrl).then(stream=>stream.json());
  }

  getDetailsMovie(imdbId: string){
    this.setDetailsUrl(imdbId);
    return fetch(this.detaiulsUrl).then(stream=>stream.json());
  }
}
