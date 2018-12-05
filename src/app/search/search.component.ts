import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';
import { Subject } from 'rxjs';
// import { map } from 'rxjs/operators';
import 'rxjs/Rx';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults: Movie[] = [];
  search$: Subject<string> = new Subject<string>();
  fetching = false;
  search = '';
  constructor(private movieService: MovieService ) { }

  ngOnInit() {
    this.search$
    .debounceTime(700)
      .map(query => {
        this.fetching = true;
        return query;
      })
      .subscribe(this.searchQuery.bind(this));
  }

  searchQuery(query: string) {
    if (query.length > 0) {
      this.movieService.searchMovie(query)
        .subscribe((results) => {
          this.fetching = false;
          this.searchResults = results;
        });
    } else {
      this.fetching = false;
      this.searchResults = [];
    }
  }

  searchRelated(e) {
    console.log(e.target.value);
  }

  setCurrentMovie(movie: Movie) {
    this.movieService.changeSelectedMovie(movie);
  }

}
