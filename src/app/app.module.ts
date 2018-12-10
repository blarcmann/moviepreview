import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { EachMovieComponent, TruncatePipe } from './each-movie/each-movie.component';
import { HeaderComponent } from './header.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FooterComponent } from './footer/footer.component';
import { MovieService } from './movie.service';
import { TrendingComponent } from './trending/trending.component';
import { BestRatedComponent } from './best-rated/best-rated.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EachMovieComponent,
    HeaderComponent,
    MovieDetailsComponent,
    FooterComponent,
    TrendingComponent,
    BestRatedComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
