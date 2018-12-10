import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestRatedComponent } from './best-rated.component';

describe('BestRatedComponent', () => {
  let component: BestRatedComponent;
  let fixture: ComponentFixture<BestRatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestRatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
