import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';
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
