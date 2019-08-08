import {Component, OnInit} from '@angular/core';
import {TransactionServices} from '../../Shared/transaction-services';
import {TransactionModel} from '../../Shared/transaction.model';

@Component ({
  selector: 'app-info-by-stockpile-results',
  templateUrl: './info-by-stockpile-results.html'
})

export class InfoByStockpileResultsComponent implements OnInit {

  numberOfLoads = 0;
  transactions: TransactionModel[] = [];
  source = '';
  stockpile = '';
  customer = '';
  totalGrossWeight = 0;
  totalTareWeight = 0;
  totalTons = 0;


  constructor(private transactionService: TransactionServices) {}

  ngOnInit(): void {
    this.transactions = this.transactionService.getTransactionResults();
    this.numberOfLoads = this.transactions.length;
    this.source = this.transactions[0].source;
    this.stockpile = this. transactions[0].destination;
    this.customer = this. transactions[0].customer;
    this.computeData();
}

computeData() {
    for ( const transaction of this.transactions) {
      this.totalGrossWeight += +transaction.grossWeight;
      this.totalTareWeight += +transaction.tareWeight;
      this.totalTons = ((this.totalGrossWeight - this.totalTareWeight) / 2000);
    }

  }

}

