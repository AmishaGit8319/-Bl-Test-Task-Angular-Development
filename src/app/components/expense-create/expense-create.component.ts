// import { Component } from '@angular/core';
// import { ExpenseService } from '../../services/expense.service';
// import { CommonService } from '../../services/common.service';

// @Component({
//   selector: 'app-expense-create',
//   templateUrl: './expense-create.component.html',
//   styleUrl: './expense-create.component.scss'
// })
// export class ExpenseCreateComponent {
//   amount: number = 0;
//   description: string = '';
//   date: string = '';
//   category: string = '';

//   constructor(private expenseService: ExpenseService,
//     private CommonService :CommonService,

//   ) {
//     this.CommonService.setNavTittleAndMenu("Expenses Create");
//   }

//   addExpense() {
//     this.expenseService.addExpense(1, this.amount, this.description, this.date, this.category);
//     alert('Expense added successfully');
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { CommonService } from '../../services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.component.html',
  styleUrls: ['./expense-create.component.scss']
})
export class ExpenseCreateComponent {
  amount: number = 0;
  description: string = '';
  date: string = '';
  category: string = '';
  groupId: number = 0;
  queryParams: any;

  constructor(
    private expenseService: ExpenseService,
    private commonService: CommonService,
    private route: Router
  ) {
    this.commonService.setNavTittleAndMenu("Expenses Create");
    const state = this.route.getCurrentNavigation();
    const rowitem = state?.extras.state;
    if(rowitem && rowitem?.['id']){
      this.groupId = rowitem?.['id'];
    }
  }

  addExpense(form: NgForm) {
    if (form.valid) {
      this.expenseService.addExpense(this.groupId, this.amount, this.description, this.date, this.category);
      this.route.navigate(['/groups'])
      alert('Expense added successfully');
    } else {
      form.controls['amount'].markAsTouched();
      form.controls['description'].markAsTouched();
      form.controls['date'].markAsTouched();
    }
  }
}

