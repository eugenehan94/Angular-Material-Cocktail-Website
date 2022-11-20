import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiqueurComponent } from './liqueur.component';

describe('LiqueurComponent', () => {
  let component: LiqueurComponent;
  let fixture: ComponentFixture<LiqueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiqueurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiqueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
