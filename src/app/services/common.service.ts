import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  navbarTittle = new BehaviorSubject<string>('');

  constructor() { }

  setNavTittleAndMenu(titleName:string=''){
    this.navbarTittle.next(titleName);
  }
}
