import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
    const getSoursesString = this.dbUrl3 + '/getSources';
    return this.http.get(getSoursesString);
  }

  fecthDesinations() {
    const getDestinationString = this.dbUrl + '/getDestinations';
    return this.http.get(getDestinationString);
  }
  fetchDestinationsLocal() {
    const getDestinationString = this.dbUrl3 + '/getDestinations';
    return this.http.get(getDestinationString);
  }
}
