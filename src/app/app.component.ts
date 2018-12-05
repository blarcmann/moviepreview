import { Component } from '@angular/core';
import { Movie } from './Movie';
import { data } from './mock-data';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentMovie: Movie = null;
  title = 'movie-search';

  constructor(private movieService: MovieService) {
    movieService.currentMovie.subscribe(movie=> {
      this.currentMovie = movie;
    })
  }


  startNewSearch() {
    this.movieService.changeSelectedMovie(null);
  }


}
