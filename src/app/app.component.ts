import { Component, OnInit } from '@angular/core';
import { Movie } from './Movie';
import { data } from './mock-data';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentMovie: Movie = null;
  title = 'movie-search';
  trendResults: Movie[] = [];

  constructor(private movieService: MovieService) {
    movieService.currentMovie.subscribe(movie => {
      this.currentMovie = movie;
    });
  }

  ngOnInit() {
    this.fetchTrends();
  }

  fetchTrends() {
    this.movieService.getTrending()
      .subscribe((results) => {
        console.log(results);
        this.trendResults = results;
      });
  }

  startNewSearch() {
    this.movieService.changeSelectedMovie(null);
  }


}
