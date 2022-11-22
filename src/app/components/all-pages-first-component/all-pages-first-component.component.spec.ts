import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPagesFirstComponentComponent } from './all-pages-first-component.component';

describe('AllPagesFirstComponentComponent', () => {
  let component: AllPagesFirstComponentComponent;
  let fixture: ComponentFixture<AllPagesFirstComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPagesFirstComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPagesFirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
