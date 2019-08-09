import {Component, OnInit} from '@angular/core';
import {TransactionModel} from '../../Shared/transaction.model';
import {TransactionServices} from '../../Shared/transaction-services';

@Component({
  selector: 'app-summary-info-results.component',
  templateUrl: './summary-info-results.component.html'
})

export class SummaryInfoResultsComponent implements OnInit {

  transactions: TransactionModel[] = [];
  stringArray: string[] = [];
  sourceArray: TransactionModel[] = [];
  dividerString = '---------------------------------------------';

  constructor(private transactionService: TransactionServices) {}
  ngOnInit(): void {
    this.transactions = this.transactionService.getTransactionResults();
    this.computeSummary(this.transactions);
  }

  computeSummary(transactions: TransactionModel[]) {
    console.log(' compute summary');
    while (transactions.length > 0) {
     const source = transactions[0].source;
     for (const entry of transactions) {
       if (entry.source === source) {
         this.sourceArray.push(entry);
       }
     }
     this.stringArray.push('Source = ' + this.sourceArray[0].source);
     this.stringArray.push(this.dividerString);
     this.processSourceArray(this.sourceArray);
     this.deleteFromSourceArray(this.transactions, source);
   }
  }

  processSourceArray(sourceArray: TransactionModel[]) {
    let grossWeight = 0;
    let tareWeight = 0;
    let tons = 0;
    let truckCount = 0;

    while (sourceArray.length > 0) {
      console.log(' source array length = ' + length);
      // reset numbers for next iteration through while loop
      grossWeight = 0;
      tareWeight = 0;
      truckCount = 0;
      tons = 0;

      const destination = sourceArray[0].destination;
      this.stringArray.push('Stockpile  = ' + destination);
      for (const entry of sourceArray) {
        if (entry.destination === destination) {
          grossWeight += +entry.grossWeight;
          tareWeight += +entry.tareWeight;
          truckCount ++;
        }
      }
      tons = (grossWeight - tareWeight) / 2000;
      this.stringArray.push('Loads = ' + truckCount);
      this.stringArray.push('Tons = ' + tons);
      this.stringArray.push(this.dividerString);

      this.deleteDestinationFromArray(sourceArray, destination);
      this.deleteDestinationFromArray(this.transactions, destination);
    }
  }

  deleteFromSourceArray(array: TransactionModel[], key: string) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].source === key) {
        array.splice(i, 1);
        i--;
      }
    }
  }

  deleteDestinationFromArray(array: TransactionModel[], key: string) {

    for (let i = 0; i < array.length ; i++) {
      if (array[i].destination === key) {
        array.splice(i, 1);
        i--;
      }
    }
  }
}
