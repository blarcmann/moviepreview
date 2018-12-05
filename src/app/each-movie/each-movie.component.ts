import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../Movie';

@Component({
  selector: 'app-each-movie',
  templateUrl: './each-movie.component.html',
  styleUrls: ['./each-movie.component.css']
})
export class EachMovieComponent implements OnInit {
  @Input() movie: Movie = {};
  @Input() index = 1;
  constructor() { }

  ngOnInit() {
  }

  backdropStyle = () => ({
    'background': `linear-gradient(180deg, rgba(0,0,0,0.7), transparent), url(${this.movie.backdropUrl})`,
    'background-size': 'cover'
  })

  animationDelay = () => ({
    'animation-delay': `${this.index * .3}s`
  })

}
