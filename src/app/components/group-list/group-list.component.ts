import { Component } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { Route, Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.scss'
})
export class GroupListComponent {
  groups: any = [];
  selectedGroup: any;


  constructor(
    private groupService: GroupService,
    private router : Router,
    private commonService: CommonService
  ) {
    this.commonService.setNavTittleAndMenu("Groups");
    this.groups = this.groupService.getGroups();
  }

  addMember() {
    if (this.selectedGroup) {
        let member = 'Amisha'; // you can add member from the list also (not implemented) 
        this.groupService.addMemberToGroup(this.selectedGroup?.id, member);
        alert('Invite Sent To The Added Member')
    } else {
      alert('Please select a group to add members to.');
    }
  }

  createGroup() {
    this.router.navigate(['/groups/create']);
  }

  addExpenses() {
    if (this.selectedGroup) {
      this.router.navigateByUrl("/expense/create/"+this.selectedGroup.id,{state:this.selectedGroup});
    } else {
      alert('Please select a group to add expenses');
    }
  }
  
  
}
