import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackService {
  constructor(/* private snackBar: MatSnackBar */) {
  }

  error(message: string) {
    // return this.snackBar.open(message, undefined, {
    //   panelClass: ['snackbar-error'],
    //   duration: 5000
    // });
  }

  success(message: string) {
    // return this.snackBar.open(message, undefined, {panelClass: ['snackbar-success']});
  }
}
