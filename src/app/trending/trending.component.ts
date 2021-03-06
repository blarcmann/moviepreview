import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../Movie';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  @Input() trend: Movie = {};
  // @Input() index = 1;
  display = true;
  constructor() { }

  ngOnInit() {

  }

  backdropStyle = () => ({
    'background': `linear-gradient(180deg, rgba(0,0,0,0.7), transparent), url(${this.trend.backdropUrl})`,
    'background-size': 'cover'
  })

  // toggleDisplay() {

  // }

  toggleView(trend) {
    this.display = !this.display;
  }

}
