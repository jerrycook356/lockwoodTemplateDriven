import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {TransactionServices} from './transaction-services';
import {TransactionModel} from './transaction.model';

@Injectable({providedIn: 'root'})

export class TransactionResolverService implements Resolve<TransactionModel[]> {

  constructor(private transactionservice: TransactionServices) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.transactionservice.getTransactionResults();

  }
}
