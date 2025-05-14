import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoisaComponent } from './coisa.component';

describe('CoisaComponent', () => {
  let component: CoisaComponent;
  let fixture: ComponentFixture<CoisaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoisaComponent]
    });
    fixture = TestBed.createComponent(CoisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
