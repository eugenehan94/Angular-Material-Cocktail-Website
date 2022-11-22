import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPagesSecondComponentComponent } from './all-pages-second-component.component';

describe('AllPagesSecondComponentComponent', () => {
  let component: AllPagesSecondComponentComponent;
  let fixture: ComponentFixture<AllPagesSecondComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPagesSecondComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPagesSecondComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
