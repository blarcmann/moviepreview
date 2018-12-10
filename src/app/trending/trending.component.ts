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
  constructor() { }

  ngOnInit() {

  }

}
