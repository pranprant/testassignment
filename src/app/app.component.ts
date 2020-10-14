import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { PopupComponent } from './utils/popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // userInformationForm: FormGroup;
  // submitted = false;
  // constructor(private fb: FormBuilder, private dialog: MatDialog,) { }

  // ngOnInit(): void {
  //   this.userInformationForm = this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     phone: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
  //     email: ['', [Validators.required, Validators.email]]
  //   });
  // }
  // get f() {
  //   return this.userInformationForm.controls;
  // }
  // onSubmit() {
  //   this.submitted = true;
  //   if (this.userInformationForm.invalid) {
  //     return;
  //   }
  //   const dialogRef = this.dialog.open(PopupComponent, {
  //     width: '500px',
  //     data: this.userInformationForm.value
  //   });
  //   dialogRef.afterClosed().subscribe(dialogRefResult => {
  //     if (!dialogRefResult) {
  //       return;
  //     }
  //   });
  // }


}
