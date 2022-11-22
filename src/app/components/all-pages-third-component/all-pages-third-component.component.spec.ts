import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPagesThirdComponentComponent } from './all-pages-third-component.component';

describe('AllPagesThirdComponentComponent', () => {
  let component: AllPagesThirdComponentComponent;
  let fixture: ComponentFixture<AllPagesThirdComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPagesThirdComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPagesThirdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
