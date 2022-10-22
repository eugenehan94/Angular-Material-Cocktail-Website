import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThirdComponentComponent } from './home-third-component.component';

describe('HomeThirdComponentComponent', () => {
  let component: HomeThirdComponentComponent;
  let fixture: ComponentFixture<HomeThirdComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeThirdComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeThirdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
