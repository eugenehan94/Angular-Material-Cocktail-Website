import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RyeWhiskeyComponent } from './rye-whiskey.component';

describe('RyeWhiskeyComponent', () => {
  let component: RyeWhiskeyComponent;
  let fixture: ComponentFixture<RyeWhiskeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RyeWhiskeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RyeWhiskeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
