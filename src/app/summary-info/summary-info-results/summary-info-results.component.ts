import {Component, OnInit} from '@angular/core';
import {TransactionModel} from '../../Shared/transaction.model';
import {TransactionServices} from '../../Shared/transaction-services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-summary-info-results.component',
  templateUrl: './summary-info-results.component.html'
})

export class SummaryInfoResultsComponent implements OnInit {

  transactions: TransactionModel[] = [];
  constructor(private transactionService: TransactionServices) {}
  ngOnInit(): void {
    this.transactions = this.transactionService.getTransactionResults();
    this.computeSummary(this.transactions);
  }

  computeSummary(transactions: TransactionModel[]) {


  }
}
