import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
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


@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  constructor() { }
  transform(value: string, limit: number, trail: String = '…'): string {
    let result = value || '';
    if (value) {
      const words = value.split(/\s+/);
      if (words.length > Math.abs(limit)) {
        if (limit < 0) {
          limit *= -1;
          result = trail + words.slice(words.length - limit, words.length).join(' ');
        } else {
          result = words.slice(0, limit).join(' ') + trail;
        }
      }
    }
    return result;
  }
}
