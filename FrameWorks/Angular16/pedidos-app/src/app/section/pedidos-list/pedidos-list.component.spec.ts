import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidosListComponent } from './pedidos-list.component';



describe('PedidosListComponent', () => {
  let component: PedidosListComponent;
  let fixture: ComponentFixture<PedidosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosListComponent]
    });
    fixture = TestBed.createComponent(PedidosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
