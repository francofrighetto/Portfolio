import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressHabilidadesComponent } from './progress-habilidades.component';

describe('ProgressHabilidadesComponent', () => {
  let component: ProgressHabilidadesComponent;
  let fixture: ComponentFixture<ProgressHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressHabilidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
