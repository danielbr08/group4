import { Component, OnInit, Input } from '@angular/core';
import { Imovie } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
@Input() movie: Imovie;
imdbLink: string;
details: string[];
  constructor(private moviesService: MoviesService) { 
    this.details = [];
  }

  ngOnInit() {
    this.imdbLink = `https://www.imdb.com/title/${this.movie.imdbID}`;
  }

  onImgClicked(){
    this.moviesService.getDetailsMovie(this.movie.imdbID).then(data=>{
      for(let d in data){
        if(d === "Ratings"){
          this.addRatings(data[d]);
        }
        else if (d === "Actors") {
          this.addActors(data[d]);
        }
        else {
          this.details.push(`${d} : ${data[d]}`);
        }
      }
    })
  }

  addRatings(ratings){
    ratings.map(rating=>this.details.push(`${rating.Source}: ${rating.Value}`));
  }

  addActors(actors){
    this.details.push(`Actors : ${actors.split(',')}`);
  }

}
