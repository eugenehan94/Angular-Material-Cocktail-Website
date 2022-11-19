import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BourbonHeroComponent } from './bourbon-hero.component';

describe('BourbonHeroComponent', () => {
  let component: BourbonHeroComponent;
  let fixture: ComponentFixture<BourbonHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BourbonHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BourbonHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
