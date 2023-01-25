import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  fileUploadForm: FormGroup;

  errors = false;

  data: any;

  constructor(private dataService: DataService, private fb: FormBuilder, private router: Router, private location: Location) {
    this.fileUploadForm = this.fb.group({
      file: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    if(!this.dataService.reloaded){
      this.router.navigate(['/first'])
    }
    this.data = this.dataService.data;
  }

  get file() {
    return this.fileUploadForm.get('file');
  }

  submitHandler(form: FormGroup){
    if(this.dataService.data.file.length == 0){
      if(form.invalid){
        this.errors = true;
        alert("Файл не загружен");
      } else {
        this.dataService.data.file = form.get('file')!.value;
        this.router.navigate(['/third']);
      }
    } else {
      this.router.navigate(['/third']);
    }
  }

  back(){
    this.location.back()
  }

}
