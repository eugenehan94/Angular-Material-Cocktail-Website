import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSecondComponentComponent } from './home-second-component.component';

describe('HomeSecondComponentComponent', () => {
  let component: HomeSecondComponentComponent;
  let fixture: ComponentFixture<HomeSecondComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSecondComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSecondComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
