import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpService} from '../http-service';
import {Subscription} from 'rxjs';
import {TransactionServices} from '../Shared/transaction-services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info-by-stockpile',
  templateUrl: './info-by-stockpile.component.html',
  styleUrls: ['./info-by-stockpile.component.css']
})
export class InfoByStockpileComponent implements OnInit , OnDestroy {
@ViewChild('f', {static: false}) infoForm: NgForm;

isSubmitted = false;
isDoneLoading = false;
customers: string[] = [];
sources: string[] = [];
destinations: string[] = [];
noData = false;

customerSub: Subscription;
sourcesSub: Subscription;
destinationSub: Subscription;

customerFinal = '';
sourceFinal = '';
destinationFinal = '';
startDateString: string;
endDateFinal: string;


  constructor(private httpService: HttpService, private transactionService: TransactionServices,
              private router: Router) { }


  ngOnInit()  {
    this.noData = false;
    this.isSubmitted = false;
    this.getCustomers();
    this.getSources();
    this.getDestinations();

  }

  ngOnDestroy(): void {
    this.customerSub.unsubscribe();
    this.sourcesSub.unsubscribe();
    this.destinationSub.unsubscribe();
  }

  getCustomers() {
    this.customerSub = this.httpService.fetchCustomers().subscribe(responseData => {
      this.customers = responseData.toString().split(',');
      },
        error => { // if error from this url use the local url
      console.log(error.message);
      this.customerSub = this.httpService.fetchCustomers2().subscribe( responseData2 => {
       this.customers = responseData2.toString().split(',');
      });
    });

  }

  getSources() {
    this.sourcesSub = this.httpService.fetchSources().subscribe( data => {
      this.sources = data.toString().split(',');
    },
      error => {
      console.log(error.message);
      this.customerSub = this.httpService.fetchSourcesLocal().subscribe( data2 => {
        this.sources = data2.toString().split(',');
      });
      });
  }

  getDestinations() {
    this.destinationSub = this.httpService.fecthDesinations().subscribe(data => {
    this.destinations = data.toString().split(',');
  }, error => {
      console.log(error.message);
      this.destinationSub = this.httpService.fetchDestinationsLocal().subscribe( data2 => {
        this.destinations = data2.toString().split(',');
      });
    });

  }

  onSubmit(form: NgForm) {
    this.noData = false;
    this.isSubmitted = true;
    this.startDateString += ' 00:00:00.000000';
    this.endDateFinal += ' 23:59:59.000000';
    this.transactionService.getTransactionsBySelection(this.startDateString,
      this.endDateFinal, this.sourceFinal, this.destinationFinal, this.customerFinal).then(data => {
        if (this.transactionService.getTransactionResults().length !== 0) {
          form.resetForm();
          this.router.navigateByUrl('/info-by-stockpile-results');
        } else {
          this.noData = true;
        }
    });

  }

}
