import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router"
import { DataService } from '../data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  profileForm: FormGroup;
  entityForm: FormGroup;

  profileType = true;
  errors = false;

  data: any;

  constructor(private fb: FormBuilder, private router: Router, private dataService: DataService) {
    this.profileForm = this.fb.group({
      iin: ['', [Validators.required, Validators.pattern(/^([\d]+)$/)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      fatherName: [''],
      // email: ['', [Validators.required, Validators.pattern(/^[\w\d._-]+@[\w\d._-]+.[\w]{2,4}$/)]],
    });

    this.entityForm = this.fb.group({
      bin: ['', [Validators.required, Validators.pattern(/^([\d]+)$/)]],
      entityName: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.data = this.dataService.data;
    console.log(this.dataService.data);
  }

  get email(){
    return this.profileForm.get('email')
  }

  get iin(){
    return this.profileForm.get('iin')
  }

  get lastName(){
    return this.profileForm.get('lastName')
  }

  get firstName(){
    return this.profileForm.get('firstName')
  }

  get entityName(){
    return this.entityForm.get('entityName');
  }

  get bin(){
    return this.entityForm.get('bin');
  }

  setStatus(type: boolean){
    this.profileType = type;
    this.errors = false;
  }

  submitHandler(form: FormGroup){
    if(form.invalid){
      this.errors = true;
      alert("Некорректный ввод данных");
    } else {
      this.router.navigate(['/second']);
      this.dataService.data.info = form.value;
      this.dataService.reloaded = true;
    }
  }
}
