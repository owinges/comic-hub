import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-character-edit-modal',
  templateUrl: './character-edit-modal.component.html',
  styleUrls: ['./character-edit-modal.component.scss']
})
export class CharacterEditModalComponent implements OnInit {
  editing = false;

  constructor(
    public dialogRef: MatDialogRef<CharacterEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar
  ) { }

  closeDialog(): void {
     if (this.data.isNew) {
      this.openSnackBar('New character saved!', 'Close');
      this.dialogRef.close(this.data.character);
    } else {
      this.openSnackBar('Changes saved!', 'Close');
      this.dialogRef.close();
    }
  }

  toggleEdit(): void {
    this.editing = !this.editing;
  }

  ngOnInit() {
    if (this.data.isNew) {
      this.editing = true;
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
