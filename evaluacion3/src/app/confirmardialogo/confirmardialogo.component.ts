import { MatDialogRef, MatDialogActions, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { Component } from '@angular/core';
@Component({
  selector: 'app-confirmardialog',
  templateUrl:'./confirmardialogo.component.html',
  styleUrls: ['./confirmardialogo.component.scss'],
  standalone:true,
  imports:[ MatDialogActions, MatDialogContent, MatDialogModule]
})
export class ConfirmDialogoComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDialogoComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirm(): void {
    this.dialogRef.close(true);
  }
}
