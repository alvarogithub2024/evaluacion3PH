import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ConfirmDialogoComponent } from './confirmardialogo.component';

describe('ConfirmardialogoComponent', () => {
  let component: ConfirmDialogoComponent;
  let fixture: ComponentFixture<ConfirmDialogoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ConfirmDialogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
