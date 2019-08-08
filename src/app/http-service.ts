import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TransactionModel} from './Shared/transaction.model';
@Injectable ({providedIn: 'root'})

export class HttpService {

  // url for anywhere over the internet
  dbUrl = 'http://lockwoodwebservice.dynu.net:90/WebserviceForWork2/webapi/WebService';
  // url if on local network
  dbUrl2 = 'http://192.168.254.99:90/WebserviceForWork2/webapi/WebService';
  // test url on laptop
  dbUrl3 = 'http://192.168.254.98:90/WebserviceForWork2/webapi/WebService';
  constructor(private http: HttpClient) {
  }

  // called if on the internet
  fetchCustomers() {
    const getCustomerString = this.dbUrl + '/getCustomers';
    return  this.http.get<string>(getCustomerString);
  }
  // called if on the local network
  fetchCustomers2() {
    const getCustomerString = this.dbUrl3 + '/getCustomers';
    return this.http.get<string>(getCustomerString);
  }

  // called if on the internet
  fetchSources() {
    const getSourcesString = this.dbUrl + '/getSources';
    return this.http.get(getSourcesString);
  }
  // called if on the local network
  fetchSourcesLocal() {
    const getSourcesString = this.dbUrl3 + '/getSources';
    return this.http.get(getSourcesString);
  }
  // get destinations from database if on outside network
  fecthDesinations() {
    const getDestinationString = this.dbUrl + '/getDestinations';
    return this.http.get(getDestinationString);
  }
  // get destinations from database if on local network
  fetchDestinationsLocal() {
    const getDestinationString = this.dbUrl3 + '/getDestinations';
    return this.http.get(getDestinationString);
  }
  // get by selection outside network
    getBySelection(startDateString: string, endDateString: string, sourceString: string,
                   destinationString: string, customerString: string) {

    const getBySelectionString  = this.dbUrl + '/getBySelection';
    return this.http.get<TransactionModel[]>(getBySelectionString,
      {
        params: {
          startDate: startDateString,
          endDate: endDateString,
          source: sourceString,
          destination: destinationString,
          customer: customerString
        }
      }
    ).toPromise();

  }

  // get by selection local network
   getBySelectionLocal(startDateString: string, endDateString: string, sourceString: string,
                       destinationString: string, customerString: string) {
    const getBySelectionStringLocal = this.dbUrl3 + '/getBySelection';
    return   this.http.get<TransactionModel[]>(getBySelectionStringLocal, {
      params: {
        startDate: startDateString,
        endDate: endDateString,
        source: sourceString,
        destination: destinationString,
        customer: customerString
      }
    }).toPromise();
  }
  // get summary outside local network
  getSummary(startDateString: string, endDateString: string, customerString: string) {
    const getSummaryString = this.dbUrl + '/getSummary';
    return this.http.get<TransactionModel[]>(getSummaryString, {
      params: {
        startDate: startDateString,
        endDate: endDateString,
        customer: customerString
      }
    }).toPromise();
  }
  // get summary if on local network
  getSummaryLocal(startDateString: string, endDateString: string, customerString: string) {
    const getSummaryLocalString = this.dbUrl3 + '/getSummary';
    return this.http.get<TransactionModel[]>(getSummaryLocalString, {
      params: {
        startDate: startDateString,
        endDate: endDateString,
        customer: customerString
      }
    }).toPromise();
  }

}
