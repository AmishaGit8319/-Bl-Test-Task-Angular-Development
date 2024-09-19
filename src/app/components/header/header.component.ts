import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  subscription = new Subscription();
  navTittle='';


  constructor(
    private router: Router,
    private commonService :CommonService,
    private titleService : Title

  ) {
  this.subscription.add(this.commonService.navbarTittle.subscribe((o)=>{
    if(o) {
      this.navTittle = o;
    }else{
      this.navTittle = 'Split-Wise App'
    }
    this.titleService.setTitle(this.navTittle);
  }));


    // this.filterArray = o.filter(obj => obj.visible === true);
    // if(this.innerWidth > 500){
    //   this.filterArray=this.filterArray.filter(f=>f.label !='filter');
    // }


  };

}