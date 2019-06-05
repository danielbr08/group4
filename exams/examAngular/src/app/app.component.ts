import { Component } from '@angular/core';
import { Imovie } from './movie.model';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examAngular';
  movies: Imovie[];
  hasMore: boolean;
  pageNumber: number;
  keyWord: string;

  constructor(private moviesService: MoviesService){
    this.movies = [];
    this.hasMore = false;
    this.keyWord = '';
    this.pageNumber = 1;
  }

  onSubmit(e,keyWord){
    e.preventDefault();
    this.resetValues();
    this.keyWord = keyWord; 

    this.searchMovie(this.keyWord);
}

searchMovie(keyWord: string){

  this.moviesService.searchMovie(keyWord,this.pageNumber).then(data=>{
    if(data.Response === "True"){
    data.Search.length ? this.setMovies(data.Search) : this.disabledLoadMore();
    }
    else
      this.disabledLoadMore();
  });
}

setMovies(data){
  this.movies = this.movies.concat(data);

  this.pageNumber++;
  this.hasMore = true;
}

  resetValues(){
    this.movies = [];
    this.hasMore = false;
    this.keyWord = '';
    this.pageNumber = 1;
  }

  onLoadMore(){
    this.moviesService.searchMovie(this.keyWord,this.pageNumber).then(data=>{
      console.log(data);
      if(data.Response === "True"){
        data.Search.length ? this.setMovies(data.Search) : this.disabledLoadMore();
      }
      else
        this.disabledLoadMore();
    });
  }

  disabledLoadMore(){
    this.hasMore = false;
  }
}
