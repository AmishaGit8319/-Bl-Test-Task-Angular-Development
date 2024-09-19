import { Component } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrl: './group-create.component.scss'
})
export class GroupCreateComponent {
  groupName: string = '';
  description: string = '';

  constructor(private groupService: GroupService,
    private CommonService :CommonService,
    private router : Router
  ) {
    this.CommonService.setNavTittleAndMenu("Group Create");
  }

  createGroup(form: NgForm) {
    if(form.valid) {
      this.groupService.createGroup(this.groupName, this.description);
      alert('Group created successfully');
      this.router.navigate(['/groups']);
    } else {
      form.controls['groupName'].markAsTouched();
      form.controls['description'].markAsTouched();
    }
  }

}
