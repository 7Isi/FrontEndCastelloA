import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoComponent } from './curriculos.component';

describe('CurriculoComponent', () => {
  let component: CurriculoComponent;
  let fixture: ComponentFixture<CurriculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculoComponent]
    });
    fixture = TestBed.createComponent(CurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
