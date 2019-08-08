import { Component, OnInit } from '@angular/core';
import {TransactionServices} from '../Shared/transaction-services';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-summary-info',
  templateUrl: './summary-info.component.html',
  styleUrls: ['./summary-info.component.css']
})
export class SummaryInfoComponent implements OnInit {

  startDateString = '';
  endDateString = '';
  customerString = 'SNR';
  noData = false;
  isSubmitted = false;

  constructor(private transactionService: TransactionServices, private router: Router) { }

  ngOnInit() {
    this.noData = false;
    this.isSubmitted = false;
  }

  onSubmit(form: NgForm) {

    this.startDateString += '00:00:00.000000';
    this.endDateString += '23:59:59.000000';
    this.transactionService.getSummary(this.startDateString, this.endDateString, this.customerString).then( data => {
      if (this.transactionService.getTransactionResults().length !== 0) {
        form.resetForm();
        this.router.navigateByUrl('/summary-info-results');
      } else {
        this.noData = true;
      }
    });
    }
}
