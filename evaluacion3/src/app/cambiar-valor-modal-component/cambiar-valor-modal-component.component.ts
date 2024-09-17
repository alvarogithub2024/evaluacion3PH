import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cambiar-valor-modal',
  templateUrl:'./cambiar-valor-modal-component.component.html',
  styleUrls: ['./cambiar-valor-modal-component.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class CambiarValorModalComponent {
  nuevoValor: number = 0;
  nuevaMoneda: string = "USD";
  fontSize: string = "14px"; // Tamaño de fuente dinámico

  // Injectamos el arreglo mediante MAT_DIALOG_DATA
  constructor(
    private dialogRef: MatDialogRef<CambiarValorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public valoresGuardados: any
  ) {}

  guardar() {
    this.dialogRef.close({ valorVuelo: this.nuevoValor, moneda: this.nuevaMoneda });
  }

  cerrar() {
    this.dialogRef.close();
  }
}