import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from 'src/app/auth/components/login/login.component';

/**
 * @title Dialog Animations
 */
@Component({
  selector: 'app-modal',
  styleUrls: ['./modal.component.css'],
  templateUrl: './modal-dialog.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class ModalComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './modal.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, LoginComponent],
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}
