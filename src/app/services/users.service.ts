import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

const apiUrl = environment.apiUrl + '/user';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUser(id) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${apiUrl}/${id}`, options)
    .toPromise()
  }

}
