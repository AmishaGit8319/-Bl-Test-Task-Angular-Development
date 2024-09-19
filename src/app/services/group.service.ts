import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groups: any[] = [];

  constructor() { }

  createGroup(groupName: string, description: string): any {
    let existGroups = this.getGroups();
    if(!(existGroups && existGroups?.length)) {
      const group = { id: this.groups.length + 1, groupName, description, members: [], expenses: [] };
      this.groups.push(group);
      localStorage.setItem('groups', JSON.stringify(this.groups));
      return this.groups;
    } else {
      const group = { id: existGroups.length + 1, groupName, description, members: [], expenses: [] };
      existGroups.push(group);
      localStorage.setItem('groups', JSON.stringify(existGroups));
      return existGroups;
    }
  }

  getGroups() {
    return JSON.parse(localStorage.getItem('groups') || '[]');
  }

  addMemberToGroup(groupId: number, member: string): any {
    const groups = this.getGroups();
    const group = groups.find((g: any) => g.id === groupId);
    group.members.push(member);
    localStorage.setItem('groups', JSON.stringify(groups));
  }

  getGroupById(groupId: number): Observable<any> {
     let group = this.groups.find(group => group.id === groupId);
     return group;
  }
  
  getGroupExpenses(groupId: number) {
    const group = this.groups.find(group => group.id === groupId);
    return group ? group.expenses : [];
  }
}
