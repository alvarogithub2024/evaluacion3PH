import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CambiarValorModalComponentComponent } from './cambiar-valor-modal.component.component';

describe('CambiarValorModalComponentComponent', () => {
  let component: CambiarValorModalComponentComponent;
  let fixture: ComponentFixture<CambiarValorModalComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CambiarValorModalComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CambiarValorModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
