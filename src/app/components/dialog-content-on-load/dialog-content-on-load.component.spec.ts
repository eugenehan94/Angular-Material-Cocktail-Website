import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentOnLoadComponent } from './dialog-content-on-load.component';

describe('DialogContentOnLoadComponent', () => {
  let component: DialogContentOnLoadComponent;
  let fixture: ComponentFixture<DialogContentOnLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentOnLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogContentOnLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
