import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachMovieComponent } from './each-movie.component';

describe('EachMovieComponent', () => {
  let component: EachMovieComponent;
  let fixture: ComponentFixture<EachMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
