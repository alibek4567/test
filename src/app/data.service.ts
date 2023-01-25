import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  reloaded = false;

  data = {
    info: {},
    email: '',
    file: ''
  };

  constructor() {}
}
