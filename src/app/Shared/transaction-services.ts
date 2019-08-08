import {Injectable} from '@angular/core';
import {HttpService} from '../http-service';
import {TransactionModel} from './transaction.model';

@Injectable({providedIn: 'root'})

export class TransactionServices {

  transactionResults: TransactionModel[] = [];
  constructor(private httpService: HttpService) {

  }

  getTransactionsBySelection(startDate: string, endDate: string, source: string,
                             destination: string, customer: string) {
    this.transactionResults = [];
    return this.httpService.getBySelection(
      startDate, endDate, source, destination, customer).then( data => {
        this.transactionResults = data;
    }, error => {
        return this.httpService.getBySelectionLocal(startDate, endDate, source, destination, customer).then (
          data2 => {
            this.transactionResults = data2;
          }
        );
    });


  }
 getSummary(startDate: string, endDate: string, customer: string) {
    this.transactionResults = [];
    return this.httpService.getSummary(startDate, endDate, customer).then(data => {
      this.transactionResults = data;
    }, error => {
      return this.httpService.getSummaryLocal(startDate, endDate, customer).then(data2 => {
        this.transactionResults = data2;
      });
    });
 }

  getTransactionResults() {
    return this.transactionResults.slice();
  }
}
