import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  private API_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getUser(id) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/user/${id}`, options)
    .toPromise()
  }

}
