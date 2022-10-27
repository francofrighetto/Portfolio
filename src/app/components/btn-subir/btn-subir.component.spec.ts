import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSubirComponent } from './btn-subir.component';

describe('BtnSubirComponent', () => {
  let component: BtnSubirComponent;
  let fixture: ComponentFixture<BtnSubirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSubirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSubirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
