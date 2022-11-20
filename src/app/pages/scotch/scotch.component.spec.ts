import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScotchComponent } from './scotch.component';

describe('ScotchComponent', () => {
  let component: ScotchComponent;
  let fixture: ComponentFixture<ScotchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScotchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScotchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
