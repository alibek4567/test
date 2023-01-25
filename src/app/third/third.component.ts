import { Location } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  emailForm: FormGroup;
  errors = false;
  data: any;

  constructor(
    private dataService: DataService, 
    private location: Location, 
    private fb: FormBuilder, 
    private router: Router, 
    public dialog: MatDialog
    ) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[\w\d._-]+@[\w\d._-]+\.[\w]{2,4}$/)]],    
    })
   }

  ngOnInit(): void {
    if(!this.dataService.reloaded){
      this.router.navigate(['/first'])
    }
  }

  get email() {
    return this.emailForm.get('email');
  }

  submitHandler(form: FormGroup){
    if(form.invalid){
      this.errors = true;
      alert("Некорректная почта");
    } else {
      this.dataService.data.email = form.get('email')?.value;
      this.openDialog()
    }
  }

  back(){
    this.location.back()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Modal, {
      data: {form: this.dataService.data, json: JSON.stringify(this.dataService.data.info)},
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log(this.dataService.data);
    });
  }

}

@Component({
  selector: 'modal',
  templateUrl: 'modal.html',
  styleUrls: ['./third.component.scss']
})
export class Modal {
  constructor(
    public dialogRef: MatDialogRef<Modal>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
}
