import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }

  addExpense(groupId: number, amount: number, description: string, date: string, category: string) {
    const groups = JSON.parse(localStorage.getItem('groups') || '[]');
    const group = groups.find((g: any) => g.id === groupId);
    group.expenses.push({ amount, description, date, category });
    localStorage.setItem('groups', JSON.stringify(groups));
  }
}
