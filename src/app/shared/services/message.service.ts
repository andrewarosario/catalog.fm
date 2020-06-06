import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private matSnackBar: MatSnackBar
  ) { }

  public open(message: string, action = 'Ok') {
    this.matSnackBar.open(message, action, { duration: 3000, verticalPosition: 'top'});
  }
}
