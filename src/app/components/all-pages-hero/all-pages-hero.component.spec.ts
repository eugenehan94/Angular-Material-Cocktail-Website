import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPagesHeroComponent } from './all-pages-hero.component';

describe('AllPagesHeroComponent', () => {
  let component: AllPagesHeroComponent;
  let fixture: ComponentFixture<AllPagesHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPagesHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPagesHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
