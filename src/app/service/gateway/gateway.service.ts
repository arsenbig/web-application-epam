import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataResponse } from '../../component/data/data.component';
import { HttpClient } from '@angular/common/http';
import { API_GATEWAY_HOST } from '../../constants';

@Injectable()
export class GatewayService {

  constructor(private httpClient: HttpClient) { }

  getData(service: string): Observable<DataResponse> {
    console.log('Service call: ' + service );
    return this.httpClient.get<DataResponse>(API_GATEWAY_HOST + service);
  }
}
