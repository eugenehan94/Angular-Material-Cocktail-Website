import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFirstComponentComponent } from './home-first-component.component';

describe('HomeFirstComponentComponent', () => {
  let component: HomeFirstComponentComponent;
  let fixture: ComponentFixture<HomeFirstComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFirstComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
